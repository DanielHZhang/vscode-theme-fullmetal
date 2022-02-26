import fs from 'fs';
import {compileFromFile} from 'json-schema-to-typescript';
import path from 'path';

const generateThemeTypes = async () => {
  try {
    const schemaPath = path.join(process.cwd(), 'schemas', 'vscode-color-theme.json');
    const generatedType = await compileFromFile(schemaPath);
    fs.writeFileSync(path.join(process.cwd(), 'index.d.ts'), generatedType);
  } catch (error) {
    console.error('Error generating typescript type from schema:', error);
  }
};

generateThemeTypes();

// const rawYamlTheme = fs.readFileSync(path.join(process.cwd(), 'src', 'theme.yml'), 'utf-8');
// const jsonResult = yaml.load(rawYamlTheme);
// fs.writeFileSync(
//   path.join(process.cwd(), 'themes', 'one-deep-color-theme.json'),
//   JSON.stringify(jsonResult, null, 2)
// );
