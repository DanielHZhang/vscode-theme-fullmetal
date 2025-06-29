import fs from 'fs';
import path from 'path';
import {theme} from '../theme';

// Generate color theme json file
fs.writeFileSync(
  path.join(process.cwd(), 'themes', 'fullmetal-color-theme.json'),
  JSON.stringify(theme, null, 2)
);
