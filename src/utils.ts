import type {FormatConfig} from 'oxfmt';

import type {TokenScope} from './vscode/types/scope';

export function specificity(...scopes: TokenScope[]): TokenScope {
  return scopes.join(' ') as TokenScope;
}

export const formatOptions: FormatConfig = {
  printWidth: 120,
  trailingComma: 'es5',
  semi: true,
  quoteProps: 'consistent',
  singleQuote: true,
  bracketSpacing: false,
  sortImports: true,
};
