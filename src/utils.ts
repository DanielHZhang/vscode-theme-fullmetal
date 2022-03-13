import {TokenScopeExtended} from '..';

export function specificity(...scopes: TokenScopeExtended[]): TokenScopeExtended {
  return scopes.join(' ') as TokenScopeExtended;
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
