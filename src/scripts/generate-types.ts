import fs from 'node:fs/promises';
import path from 'node:path';
import {parseArgs} from 'node:util';

import {compile} from 'json-schema-to-typescript-lite';
import {format} from 'oxfmt';

import {formatOptions} from '../utils.ts';

const {values} = parseArgs({
  options: {
    editor: {
      type: 'string',
      default: 'vscode',
    },
  },
  allowPositionals: true,
});

let schemaPath: string;
let generatedTypePath: string;

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
      const schema = JSON.parse(formattedSchema);
      if (schema.definitions) {
        schema.$defs = {...schema.definitions, ...schema.$defs};
        delete schema.definitions;
      }
      await fs.writeFile(
        path.join(outputPath, fileName),
        JSON.stringify(schema).replace(/"\$ref":"#\/definitions\//g, '"$ref":"#/$defs/')
      );
    })
  );

  schemaPath = path.join(outputPath, 'color-theme.json');
  generatedTypePath = path.join(srcPath, 'types', 'index.d.ts');
} else if (values.editor === 'zed') {
  const basePath = path.join(process.cwd(), 'src', 'zed');
  schemaPath = path.join(basePath, 'schemas', 'theme-0.2.0.json');
  generatedTypePath = path.join(basePath, 'types', 'index.d.ts');
} else {
  throw new Error(`Invalid editor: ${values.editor}`);
}

const schema = JSON.parse(await fs.readFile(schemaPath, 'utf8'));
const generatedTypes = await compile(schema, path.parse(schemaPath).name, {cwd: path.dirname(schemaPath)});
const {code, errors} = await format(generatedTypePath, generatedTypes, formatOptions);
if (errors.length > 0) {
  throw new Error(errors.map((error) => error.message).join('\n'));
}
await fs.writeFile(generatedTypePath, code);
