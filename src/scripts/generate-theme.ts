import os from 'os';
import fs from 'fs/promises';
import path from 'path';
import {parseArgs} from 'util';
import {theme as vscodeTheme} from '../vscode/theme';
import {theme as zedTheme} from '../zed/theme';

const {values} = parseArgs({
  options: {
    editor: {
      type: 'string',
      default: 'vscode',
    },
  },
  allowPositionals: true,
});

const themePath = path.join(process.cwd(), 'themes');
const start = performance.now();

if (values.editor === 'vscode') {
  await fs.writeFile(
    path.join(themePath, 'fullmetal-theme-vscode.json'),
    JSON.stringify(vscodeTheme, null, 2)
  );
} else if (values.editor === 'zed') {
  const fileName = 'fullmetal-theme-zed.json';
  const serialized = JSON.stringify(zedTheme, null, 2);
  await fs.writeFile(path.join(themePath, fileName), serialized);
  await fs.writeFile(path.join(os.homedir(), '.config', 'zed', 'themes', fileName), serialized);
}

const end = (performance.now() - start).toFixed(3);
console.log(`Generated theme for ${values.editor} in ${end}ms`);
