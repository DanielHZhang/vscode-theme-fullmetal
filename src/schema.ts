import fs from 'fs';
import {compileFromFile} from 'json-schema-to-typescript';
import path from 'path';

const main = async () => {
  try {
    const buildDirPath = path.join(process.cwd(), 'build');
    const schemaDirPath = path.join(process.cwd(), 'schemas');
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

    const generatedTypes = await compileFromFile(path.join(buildDirPath, 'color-theme.json'));
    fs.writeFileSync(path.join(process.cwd(), 'src', 'types', 'index.d.ts'), generatedTypes);
  } catch (error) {
    console.error('Error generating Typescript types from schema:', error);
  }
};

main();
