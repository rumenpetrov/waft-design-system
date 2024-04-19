import tokens from './design-tokens.ts';
import type { TokenName, TokenValue } from './design-tokens.ts';

export const isGlobalToken = (tokenName: TokenName): boolean => tokenName.startsWith('WDS--');
export const isMappedToken = (tokenName: TokenValue): boolean => tokenName.startsWith('WDS');
export const isComponentToken = (tokenName: TokenName): boolean => !tokenName.startsWith('WDS--');

export const transformTokenNameToWebTokenName = (tokenName: TokenName): string => {
  return `--${tokenName.toLowerCase()}`;
}

export const getTokenValue = (tokenName: TokenName) => {
  if (typeof tokens?.[tokenName] === 'string' && tokenName in tokens && isMappedToken(tokens[tokenName])) {
    const mappedTokenName = tokens[tokenName] as TokenName;

    return tokens[mappedTokenName];
  }

  return tokens?.[tokenName];
}

export const getWebTokenValue = (tokenName: TokenName) => {
  if (typeof tokens?.[tokenName] === 'string' && isMappedToken(tokens[tokenName])) {
    const mappedTokenName = tokens[tokenName] as TokenName;

    return `var(${transformTokenNameToWebTokenName(mappedTokenName)}, ${tokens[mappedTokenName]})`;
  }

  return tokens?.[tokenName];
}

export const renderTokens = (mapCallback: Function, filterCallback = (tokenName: TokenName) => Boolean(tokenName)) => {
  const tokenKeys = Object.keys(tokens) as TokenName[];

  return tokenKeys
    .filter(filterCallback)
    .map((tokenName: TokenName) =>
      mapCallback(
        tokenName,
        getTokenValue(tokenName),
        isMappedToken(tokenName) ? tokens[tokenName] : null,
      ));
}

export const globalTokensToWebTokens = (): string => {
  return renderTokens(
    (tokenName: TokenName, tokenValue: string) => `    ${transformTokenNameToWebTokenName(tokenName)}: ${tokenValue};\n`,
    isGlobalToken,
  ).join('')
}

export const componentTokensToWebTokens = (filterCallback: Function) => {
  return renderTokens(
    (tokenName: TokenName, tokenValue: TokenValue) => ({
      webTokenName: transformTokenNameToWebTokenName(tokenName),
      webTokenValue: tokenValue,
      mappedWebTokenName: getWebTokenValue(tokenName),
    }),
    (...args) => isComponentToken(...args) && filterCallback(...args),
  )
}

export const generateWebGlobalStyles = () => {
  const globalCSSOpen = `<style>\n  :root {\n`;
  const globalCSSVariableList = globalTokensToWebTokens();
  const globalCSSExtras = `
    accent-color: var(--wds--color--accent);
  `;
  const globalCSSClose = `}\n</style>`;

  return `${globalCSSOpen}${globalCSSVariableList}${globalCSSExtras}${globalCSSClose}`;
};
