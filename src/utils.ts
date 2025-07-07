import type {Options} from 'prettier';
import {TokenScope} from './vscode/types/scope';

export function specificity(...scopes: TokenScope[]): TokenScope {
  return scopes.join(' ') as TokenScope;
}

export const prettierOptions: Options = {
  singleQuote: true,
  semi: true,
  trailingComma: 'all',
  printWidth: 120,
};
