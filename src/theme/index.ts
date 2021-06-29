interface ThemeComponents {
  [key: string]: object;
}

export type Theme = {
  tokens?: object;
  colors?: object;
  fills?: object;
  intents?: object;
  radii?: object;
  shadows?: object;
  fontFamilies?: object;
  fontSizes?: object;
  fontWeights?: object;
  letterSpacings?: object;
  lineHeights?: object;
  zIndices?: object;
  components?: ThemeComponents;
}
