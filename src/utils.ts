import {TokenScope} from './types/scope';

export function specificity(...scopes: TokenScope[]): TokenScope {
  return scopes.join(' ') as TokenScope;
}

export function opacity(color: string, percentage: number): string {
  if (color.length === '#0000'.length || color.length === '#fffeee00'.length) {
    throw new Error('Hex color already includes alpha value');
  }
  if (percentage > 1) {
    percentage /= 100;
  }
  return `${color}${Math.round(255 * percentage).toString(16)}`;
}
