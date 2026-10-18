import {execFileSync} from 'node:child_process';
import fs from 'node:fs/promises';
import path from 'node:path';

import {schemaNames} from '../vscode/schema-names.ts';

const root = process.cwd();
const schemaDir = path.join(root, 'src', 'vscode', 'schemas');
const before = await Promise.all(
  schemaNames.map(async (name) => {
    try {
      return (await fs.stat(path.join(schemaDir, `${name}.json`))).mtimeMs;
    } catch (error) {
      if (error instanceof Error && 'code' in error && error.code === 'ENOENT') return 0;
      throw error;
    }
  })
);

execFileSync(
  'code',
  [
    '--transient',
    '--new-window',
    '--wait',
    `--extensionDevelopmentPath=${root}`,
    `--extensionTestsPath=${path.join(root, 'build', 'vscode', 'update-schemas.js')}`,
    path.join(root, 'src', 'vscode'),
  ],
  {stdio: 'inherit'}
);

await Promise.all(
  schemaNames.map(async (name, index) => {
    const file = path.join(schemaDir, `${name}.json`);
    const {mtimeMs} = await fs.stat(file);
    if (mtimeMs <= before[index]) throw new Error(`VS Code did not update ${file}`);
    JSON.parse(await fs.readFile(file, 'utf8'));
  })
);

console.log('Updated VS Code schemas.');
