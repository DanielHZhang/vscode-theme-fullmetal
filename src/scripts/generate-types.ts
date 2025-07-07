import fs from 'node:fs/promises';
import {compileFromFile} from 'json-schema-to-typescript';
import path from 'path';
import {prettierOptions} from '../utils';
import {parseArgs} from 'util';

const {values} = parseArgs({
  options: {
    editor: {
      type: 'string',
      default: 'vscode',
    },
  },
  allowPositionals: true,
});

if (values.editor === 'vscode') {
  const outputPath = path.join(process.cwd(), 'build');
  const srcPath = path.join(process.cwd(), 'src', 'vscode');
  const schemaDirPath = path.join(srcPath, 'schemas');
  const schemaFileNames = await fs.readdir(path.join(schemaDirPath));

  await Promise.all(
    schemaFileNames.map(async (fileName) => {
      const schemaPath = path.join(schemaDirPath, fileName);
      const schemaContent = await fs.readFile(schemaPath, 'utf-8');
      const formattedSchema = schemaContent.replace(
        /"vscode:\/\/schemas\/(.+)"/g,
        (_, capture) => `"${path.join(outputPath, `${capture}.json`)}"`
      );
      await fs.writeFile(path.join(outputPath, fileName), formattedSchema);
    })
  );

  const colorThemeFile = path.join(outputPath, 'color-theme.json');
  const generatedTypes = await compileFromFile(colorThemeFile, {style: prettierOptions});
  await fs.writeFile(path.join(srcPath, 'types', 'index.d.ts'), generatedTypes);
} else if (values.editor === 'zed') {
  const basePath = path.join(process.cwd(), 'src', 'zed');
  const schemaPath = path.join(basePath, 'schemas', 'theme-0.2.0.json');
  const generatedTypes = await compileFromFile(schemaPath, {style: prettierOptions});
  await fs.writeFile(path.join(basePath, 'types', 'index.d.ts'), generatedTypes);
} else {
  throw new Error(`Invalid editor: ${values.editor}`);
}
