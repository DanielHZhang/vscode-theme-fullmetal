import fs from 'node:fs/promises';

const coverage = JSON.parse(await fs.readFile('src/icons/coverage.json', 'utf8'));
const codepoints = JSON.parse(await fs.readFile('src/icons/codepoints.json', 'utf8'));
const font = await fs.readFile('themes/fullmetal-fluent.woff');
const escape = (text: string) => text.replace(/[&<>"']/g, (character) => `&#${character.charCodeAt(0)};`);
const cards = Object.keys(coverage.assets)
  .sort()
  .map((asset) => {
    const ids = coverage.icons
      .filter((row: {asset?: string}) => row.asset === asset)
      .map((row: {id: string}) => row.id);
    return `<article><h2>${escape(asset)}</h2><div class="sizes">${[12, 16, 20, 24, 32]
      .map(
        (size) =>
          `<div><span class="icon" style="font-size:${size}px">&#${codepoints[asset]};</span><small>${size}px</small></div>`
      )
      .join('')}</div><p>${ids.map(escape).join(', ')}</p></article>`;
  });
const retained = coverage.icons
  .filter((row: {status: string}) => row.status === 'default')
  .map((row: {id: string; reason: string}) => `<li><code>${escape(row.id)}</code>: ${escape(row.reason)}</li>`)
  .join('');
await fs.mkdir('build', {recursive: true});
await fs.writeFile(
  'build/icon-preview.html',
  `<!doctype html><html lang="en"><meta charset="utf-8">
<title>Fullmetal Fluent icon review</title><style>
@font-face{font-family:FullmetalPreview;src:url(data:font/woff;base64,${font.toString('base64')}) format('woff')}
*{box-sizing:border-box}body{background:#16181d;color:#e2e6ef;font:14px system-ui;margin:32px}
h1{font-size:28px}h2{font:12px ui-monospace,monospace;overflow-wrap:anywhere;color:#9cb5e2}
input{position:sticky;top:12px;padding:14px;width:100%;background:#242833;color:inherit;border:1px solid #667389;border-radius:6px;z-index:1}
main{display:grid;grid-template-columns:repeat(auto-fill,minmax(290px,1fr));gap:16px;margin-top:24px}
article{background:#20232b;padding:16px;border-radius:8px}article p{font-size:11px;line-height:1.6;overflow-wrap:anywhere;color:#b1bacb}
.sizes{display:flex;align-items:center;justify-content:space-between;height:75px}.sizes div{text-align:center}.icon{font-family:FullmetalPreview;display:block;line-height:1}small{display:block;margin-top:12px;color:#8994a8}
[hidden]{display:none}summary{cursor:pointer;margin:24px 0}li{line-height:1.8}
</style><h1>Fullmetal Fluent icon review</h1>
<p>${coverage.summary.total} VS Code IDs · ${coverage.summary.glyphs} unique Fluent glyphs · ${coverage.summary.default} native defaults retained.</p>
<p>Review the same generated font used by VS Code, at several UI sizes. Search by Fluent asset or VS Code ID.</p>
<input type="search" placeholder="Search icons or VS Code IDs" aria-label="Filter icons">
<main>${cards.join('')}</main><details><summary>Retained native icons and reasons</summary><ul>${retained}</ul></details>
<script>document.querySelector('input').addEventListener('input',event=>{const q=event.target.value.toLowerCase();for(const card of document.querySelectorAll('article'))card.hidden=!card.textContent.toLowerCase().includes(q)})</script></html>`
);
console.log('Open build/icon-preview.html to review the generated font.');
