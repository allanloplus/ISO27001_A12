#!/usr/bin/env node
/*
 * Render index.html?record to an MP4 (1280×720, 30 fps) with the narration mixed in.
 *   NODE_PATH=$(npm root -g) node tools/record_video.js [out.mp4] [--seconds N]
 * Frames come from the Chrome DevTools screencast and are resampled onto a fixed
 * 30 fps grid by their capture timestamps; audio is placed by the same timeline the
 * player uses (window.__lines), so picture and voice stay in sync.
 */
const { chromium } = require("playwright");
const { spawn, execFileSync } = require("child_process");
const path = require("path");
const fs = require("fs");
const routeFonts = require("./fonts_route");

const ROOT = path.resolve(__dirname, "..");
const args = process.argv.slice(2);
const OUT = path.resolve(ROOT, args.find(a => a.endsWith(".mp4")) || "output/ISMS_資安事件管理_動畫課.mp4");
const secIdx = args.indexOf("--seconds");
const LIMIT = secIdx >= 0 ? +args[secIdx + 1] : Infinity;
const FPS = 30;
const TMP_VIDEO = OUT.replace(/\.mp4$/, ".video.mp4");
const TMP_AUDIO = OUT.replace(/\.mp4$/, ".audio.m4a");

(async () => {
  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1280, height: 720 }, deviceScaleFactor: 1 });
  await routeFonts(page);
  await page.goto("file://" + path.join(ROOT, "index.html") + "?record", { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(800);
  const total = Math.min(LIMIT, await page.evaluate(() => window.__total));
  const lines = await page.evaluate(() => window.__lines);

  /* ---------- video ---------- */
  const ff = spawn("ffmpeg", ["-y", "-loglevel", "error", "-f", "image2pipe", "-framerate", String(FPS), "-c:v", "mjpeg", "-i", "-",
    "-c:v", "libx264", "-preset", "veryfast", "-crf", "21", "-pix_fmt", "yuv420p", TMP_VIDEO], { stdio: ["pipe", "inherit", "inherit"] });
  let t0 = null, lastBuf = null, emitted = 0;
  const emitUntil = rel => { while (lastBuf && emitted / FPS < rel) { ff.stdin.write(lastBuf); emitted++; } };
  const cdp = await page.context().newCDPSession(page);
  cdp.on("Page.screencastFrame", f => {
    cdp.send("Page.screencastFrameAck", { sessionId: f.sessionId }).catch(() => {});
    if (t0 !== null) emitUntil(f.metadata.timestamp - t0);
    lastBuf = Buffer.from(f.data, "base64");
  });
  await cdp.send("Page.startScreencast", { format: "jpeg", quality: 92, maxWidth: 1280, maxHeight: 720, everyNthFrame: 1 });
  await page.waitForTimeout(600);
  t0 = (await page.evaluate(() => window.__startRec())) / 1000;
  const started = Date.now();
  while ((Date.now() - started) / 1000 < total + 0.4) {
    await page.waitForTimeout(1000);
    const s = Math.round((Date.now() - started) / 1000);
    if (s % 30 === 0) process.stdout.write(`  ${s}s / ${Math.round(total)}s\n`);
  }
  await cdp.send("Page.stopScreencast");
  emitUntil(total);
  ff.stdin.end();
  await new Promise(r => ff.on("close", r));
  await browser.close();

  /* ---------- audio: place each clip at its timeline offset ---------- */
  const used = lines.filter(l => l.src && l.t0 < total);
  const inputs = used.flatMap(l => ["-i", path.join(ROOT, l.src)]);
  const filt = used.map((l, i) => `[${i}:a]aresample=44100,adelay=${Math.round(l.t0 * 1000)}:all=1[a${i}]`).join(";")
    + ";" + used.map((_, i) => `[a${i}]`).join("") + `amix=inputs=${used.length}:normalize=0:dropout_transition=0,apad,atrim=0:${total.toFixed(3)}[out]`;
  const script = OUT.replace(/\.mp4$/, ".filter.txt");
  fs.writeFileSync(script, filt);
  execFileSync("ffmpeg", ["-y", "-loglevel", "error", ...inputs, "-filter_complex_script", script, "-map", "[out]", "-c:a", "aac", "-b:a", "160k", TMP_AUDIO], { stdio: "inherit" });
  fs.unlinkSync(script);

  execFileSync("ffmpeg", ["-y", "-loglevel", "error", "-i", TMP_VIDEO, "-i", TMP_AUDIO, "-c:v", "copy", "-c:a", "copy", "-shortest", "-movflags", "+faststart", OUT], { stdio: "inherit" });
  fs.unlinkSync(TMP_VIDEO); fs.unlinkSync(TMP_AUDIO);
  console.log(`wrote ${OUT} (${(fs.statSync(OUT).size / 1e6).toFixed(1)} MB, ${total.toFixed(1)} s, ${emitted} frames)`);
})().catch(e => { console.error(e); process.exit(1); });
