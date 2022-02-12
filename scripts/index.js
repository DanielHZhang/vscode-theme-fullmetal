import fs from 'fs';
import yaml from 'js-yaml';
import path from 'path';

const rawYamlTheme = fs.readFileSync(path.join(process.cwd(), 'src','theme.yml'), 'utf-8');
const jsonResult = yaml.load(rawYamlTheme);
fs.writeFileSync(path.join(process.cwd(), 'themes', 'one-deep-color-theme.json'), JSON.stringify(jsonResult, null, 2));
