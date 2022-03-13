import {TokenScopeExtended} from '..';

export function specificity(...scopes: TokenScopeExtended[]): TokenScopeExtended {
  return scopes.join(' ') as TokenScopeExtended;
}

export function opacity(color: string, percentage: number): string {
  if (percentage > 1) {
    percentage /= 100;
  }
  return `${color}${Math.round(255 * percentage).toString(16)}`;
}
