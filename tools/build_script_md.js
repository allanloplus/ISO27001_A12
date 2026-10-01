#!/usr/bin/env node
// Export src/scenes.js as a readable lecture script: docs/逐字稿.md
const fs = require("fs"), path = require("path");
global.window = {};
require(path.join(__dirname, "..", "src", "scenes.js"));
const NAME = { A: "Allan 老師", R: "阿拉蕾" };
const strip = h => h.replace(/<br\s*\/?>/g, "／").replace(/<\/(li|span|div|td|tr|p)>/g, "$&\n").replace(/<[^>]+>/g, "")
  .split("\n").map(s => s.trim()).filter(Boolean);
let md = "# 資訊安全事件管理｜動畫課逐字稿\n\nISO/IEC 27001:2022 附錄A・控制屬性「運作流程」— 資訊安全事件管理\n\n講師：Allan Lo（ISMS／PIMS 輔導顧問・驗證稽核員）　助教：阿拉蕾\n\n";
window.SCENES.forEach((sc, i) => {
  md += `---\n\n## ${String(i + 1).padStart(2, "0")}｜${sc.sec}｜${sc.title}\n\n**畫面重點**\n\n`;
  md += strip(sc.html).map(s => `- ${s}`).join("\n") + "\n\n**對白**\n\n";
  md += sc.lines.map(l => `- **${NAME[l.who]}**：${l.say}`).join("\n") + "\n\n";
});
fs.writeFileSync(path.join(__dirname, "..", "docs", "逐字稿.md"), md);
console.log("wrote docs/逐字稿.md");
