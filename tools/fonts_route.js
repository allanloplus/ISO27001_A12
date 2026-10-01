// Serve Google Fonts to headless Chromium through curl, which trusts the system/proxy CA bundle.
// Without this, a sandbox behind a TLS-inspecting proxy falls back to local CJK fonts.
const { execFile } = require("child_process");

module.exports = async function routeFonts(page) {
  await page.route(/https:\/\/fonts\.(googleapis|gstatic)\.com\//, route => {
    const req = route.request();
    const ua = req.headers()["user-agent"] || "Mozilla/5.0";
    execFile("curl", ["-sS", "--fail", "-A", ua, req.url()], { encoding: "buffer", maxBuffer: 64 << 20 }, (err, body) => {
      if (err) return route.abort();
      const type = req.url().includes("fonts.googleapis.com") ? "text/css; charset=utf-8" : "font/woff2";
      route.fulfill({ status: 200, body, headers: { "content-type": type, "access-control-allow-origin": "*" } });
    });
  });
};
