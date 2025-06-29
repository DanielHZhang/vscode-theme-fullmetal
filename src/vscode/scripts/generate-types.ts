import fs from 'fs';
import {compileFromFile} from 'json-schema-to-typescript';
import path from 'path';
import {prettierOptions} from '../utils';

async function main() {
  try {
    const buildDirPath = path.join(process.cwd(), 'build');
    const srcRootPath = path.join(process.cwd(), 'src', 'vscode');
    const schemaDirPath = path.join(srcRootPath, 'schemas');

    const replaceRegex = /"vscode:\/\/schemas\/(.+)"/g;
    const schemaFileNames = fs.readdirSync(path.join(schemaDirPath));
    schemaFileNames.forEach((fileName) => {
      const schemaContent = fs.readFileSync(path.join(schemaDirPath, fileName), {encoding: 'utf8'});
      const formattedSchema = schemaContent.replace(
        replaceRegex,
        (_, capture) => `"${path.join(buildDirPath, `${capture}.json`)}"`
      );
      fs.writeFileSync(path.join(buildDirPath, fileName), formattedSchema);
    });

    const generatedTypes = await compileFromFile(path.join(buildDirPath, 'color-theme.json'), {
      style: prettierOptions,
    });
    fs.writeFileSync(path.join(srcRootPath, 'types', 'index.d.ts'), generatedTypes);
  } catch (error) {
    console.error('Error generating Typescript types from schema:', error);
  }
}

main();
