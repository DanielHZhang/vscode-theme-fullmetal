import {TokenScopeExtended} from '..';

export function specificity(...scopes: TokenScopeExtended[]): TokenScopeExtended {
  return scopes.join(' ') as TokenScopeExtended;
}
