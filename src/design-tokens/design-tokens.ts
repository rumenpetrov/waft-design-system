export type TokenName =
  | 'WDS--TEXT--H1-FONT-SIZE'
  | 'WDS--TEXT--H1-LINE-HEIGHT'
  | 'WDS--TEXT--H2-FONT-SIZE'
  | 'WDS--TEXT--H2-LINE-HEIGHT'
  | 'WDS--TEXT--H3-FONT-SIZE'
  | 'WDS--TEXT--H3-LINE-HEIGHT'
  | 'WDS--TEXT--H4-FONT-SIZE'
  | 'WDS--TEXT--H4-LINE-HEIGHT'
  | 'WDS--TEXT--H5-FONT-SIZE'
  | 'WDS--TEXT--H5-LINE-HEIGHT'
  | 'WDS--TEXT--H6-FONT-SIZE'
  | 'WDS--TEXT--H6-LINE-HEIGHT'
  | 'WDS--TEXT--P-FONT-SIZE'
  | 'WDS--TEXT--P-LINE-HEIGHT'
  | 'WDS--COLOR--BACKGROUND'
  | 'WDS--COLOR--FOREGROUND'
  | 'WDS--COLOR--ACCENT'
  | 'WDS--COLOR--ACCENT-CONTRAST'
  | 'WDS--COLOR--SUCCESS'
  | 'WDS--COLOR--ERROR'
  | 'WDS--COLOR--ERROR-CONTRAST'
  | 'WDS--COLOR--WARNING'
  | 'WDS--COLOR--INFO'
  | 'WDS--COLOR--MIX-METHOD'
  | 'WDS--SPACE--100'
  | 'WDS--SPACE--200'
  | 'WDS--SPACE--300'
  | 'WDS--SPACE--400'
  | 'WDS--SPACE--500'
  | 'WDS--SPACE--600'
  | 'WDS--SPACE--700'
  | 'WDS--SPACE--800'
  | 'WDS--SPACE--900'
  | 'WDS--RADII--BASE'
  | 'WDS--ANIMATION--TRANSITION-DURATION'
  | 'WDS--ANIMATION--TRANSITION-TIMING-FUNCTION'
  | 'WDS-BUTTON--BORDER-RADIUS'
  | 'WDS-BUTTON--PADDING-X'
  | 'WDS-BUTTON--PADDING-Y'
  | 'WDS-BUTTON--FOCUS-COLOR'
  | 'WDS-BUTTON--ACCENT--BACKGROUND-COLOR'
  | 'WDS-BUTTON--ACCENT--COLOR'
  | 'WDS-BUTTON--DANGER--BACKGROUND-COLOR'
  | 'WDS-BUTTON--DANGER--COLOR'
  | 'WDS-BUTTON--COLOR-MIX-METHOD'
  | 'WDS-BUTTON--TRANSITION-DURATION'
  | 'WDS-BUTTON--TRANSITION-TIMING-FUNCTION'
  | 'WDS-FORM-CONTROL-ENHANCER--BORDER-COLOR'
  | 'WDS-FORM-CONTROL-ENHANCER--BORDER-RADIUS'
  | 'WDS-FORM-CONTROL-ENHANCER--PADDING-X'
  | 'WDS-FORM-CONTROL-ENHANCER--PADDING-Y'
  | 'WDS-FORM-CONTROL-ENHANCER--FOCUS-COLOR'
  | 'WDS-FORM-CONTROL-ENHANCER--ERROR--BORDER-COLOR'
  | 'WDS-FORM-CONTROL-ENHANCER--ERROR--COLOR'
  | 'WDS-FORM-CONTROL-ENHANCER--COLOR-MIX-METHOD'
  | 'WDS-FORM-CONTROL-ENHANCER--TRANSITION-DURATION'
  | 'WDS-FORM-CONTROL-ENHANCER--TRANSITION-TIMING-FUNCTION'
  | 'WDS-TYPOGRAPHY--H1--FONT-SIZE'
  | 'WDS-TYPOGRAPHY--H1--LINE-HEIGHT'
  | 'WDS-TYPOGRAPHY--H2--FONT-SIZE'
  | 'WDS-TYPOGRAPHY--H2--LINE-HEIGHT'
  | 'WDS-TYPOGRAPHY--H3--FONT-SIZE'
  | 'WDS-TYPOGRAPHY--H3--LINE-HEIGHT'
  | 'WDS-TYPOGRAPHY--H4--FONT-SIZE'
  | 'WDS-TYPOGRAPHY--H4--LINE-HEIGHT'
  | 'WDS-TYPOGRAPHY--H5--FONT-SIZE'
  | 'WDS-TYPOGRAPHY--H5--LINE-HEIGHT'
  | 'WDS-TYPOGRAPHY--H6--FONT-SIZE'
  | 'WDS-TYPOGRAPHY--H6--LINE-HEIGHT'
  | 'WDS-TYPOGRAPHY--P--FONT-SIZE'
  | 'WDS-TYPOGRAPHY--P--LINE-HEIGHT'

export type TokenValue = TokenName | string;

export type Tokens = {
  [key in TokenName]: TokenValue;
}

const tokens = {
  "WDS--TEXT--H1-FONT-SIZE": "3.815rem",
  "WDS--TEXT--H1-LINE-HEIGHT": "1.2",
  "WDS--TEXT--H2-FONT-SIZE": "3.052rem",
  "WDS--TEXT--H2-LINE-HEIGHT": "1.375",
  "WDS--TEXT--H3-FONT-SIZE": "2.441rem",
  "WDS--TEXT--H3-LINE-HEIGHT": "1.375",
  "WDS--TEXT--H4-FONT-SIZE": "1.953rem",
  "WDS--TEXT--H4-LINE-HEIGHT": "1.375",
  "WDS--TEXT--H5-FONT-SIZE": "1.563rem",
  "WDS--TEXT--H5-LINE-HEIGHT": "1.5",
  "WDS--TEXT--H6-FONT-SIZE": "1.25rem",
  "WDS--TEXT--H6-LINE-HEIGHT": "1.5",
  "WDS--TEXT--P-FONT-SIZE": "1rem",
  "WDS--TEXT--P-LINE-HEIGHT": "1.6",
  "WDS--COLOR--BACKGROUND": "#fff",
  "WDS--COLOR--FOREGROUND": "#000",
  "WDS--COLOR--ACCENT": "blueviolet",
  "WDS--COLOR--ACCENT-CONTRAST": "#fff",
  "WDS--COLOR--SUCCESS": "forestgreen",
  "WDS--COLOR--ERROR": "crimson",
  "WDS--COLOR--ERROR-CONTRAST": "#fff",
  "WDS--COLOR--WARNING": "gold",
  "WDS--COLOR--INFO": "dodgerblue",
  "WDS--COLOR--MIX-METHOD": "oklab",
  "WDS--SPACE--100": "4px",
  "WDS--SPACE--200": "6px",
  "WDS--SPACE--300": "8px",
  "WDS--SPACE--400": "12px",
  "WDS--SPACE--500": "16px",
  "WDS--SPACE--600": "24px",
  "WDS--SPACE--700": "32px",
  "WDS--SPACE--800": "48px",
  "WDS--SPACE--900": "64px",
  "WDS--RADII--BASE": "4px",
  "WDS--ANIMATION--TRANSITION-DURATION": "0.3s",
  "WDS--ANIMATION--TRANSITION-TIMING-FUNCTION": "ease-in-out",
  // Button
  "WDS-BUTTON--BORDER-RADIUS": "WDS--RADII--BASE",
  "WDS-BUTTON--PADDING-X": "WDS--SPACE--500",
  "WDS-BUTTON--PADDING-Y": "WDS--SPACE--500",
  "WDS-BUTTON--FOCUS-COLOR": "WDS--COLOR--ACCENT",
  "WDS-BUTTON--ACCENT--BACKGROUND-COLOR": "WDS--COLOR--ACCENT",
  "WDS-BUTTON--ACCENT--COLOR": "WDS--COLOR--ACCENT-CONTRAST",
  "WDS-BUTTON--DANGER--BACKGROUND-COLOR": "WDS--COLOR--ERROR",
  "WDS-BUTTON--DANGER--COLOR": "WDS--COLOR--ERROR-CONTRAST",
  "WDS-BUTTON--COLOR-MIX-METHOD": "WDS--COLOR--MIX-METHOD",
  "WDS-BUTTON--TRANSITION-DURATION": "WDS--ANIMATION--TRANSITION-DURATION",
  "WDS-BUTTON--TRANSITION-TIMING-FUNCTION": "WDS--ANIMATION--TRANSITION-TIMING-FUNCTION",
  // FormControlEnhancer
  "WDS-FORM-CONTROL-ENHANCER--BORDER-COLOR": "WDS--COLOR--FOREGROUND",
  "WDS-FORM-CONTROL-ENHANCER--BORDER-RADIUS": "WDS--RADII--BASE",
  "WDS-FORM-CONTROL-ENHANCER--PADDING-X": "WDS--SPACE--500",
  "WDS-FORM-CONTROL-ENHANCER--PADDING-Y": "WDS--SPACE--500",
  "WDS-FORM-CONTROL-ENHANCER--FOCUS-COLOR": "WDS--COLOR--ACCENT",
  "WDS-FORM-CONTROL-ENHANCER--ERROR--BORDER-COLOR": "WDS--COLOR--ERROR",
  "WDS-FORM-CONTROL-ENHANCER--ERROR--COLOR": "WDS--COLOR--ERROR",
  "WDS-FORM-CONTROL-ENHANCER--COLOR-MIX-METHOD": "WDS--COLOR--MIX-METHOD",
  "WDS-FORM-CONTROL-ENHANCER--TRANSITION-DURATION": "WDS--ANIMATION--TRANSITION-DURATION",
  "WDS-FORM-CONTROL-ENHANCER--TRANSITION-TIMING-FUNCTION": "WDS--ANIMATION--TRANSITION-TIMING-FUNCTION",
  // Typography
  "WDS-TYPOGRAPHY--H1--FONT-SIZE": "WDS--TEXT--H1-FONT-SIZE",
  "WDS-TYPOGRAPHY--H1--LINE-HEIGHT": "WDS--TEXT--H1-LINE-HEIGHT",
  "WDS-TYPOGRAPHY--H2--FONT-SIZE": "WDS--TEXT--H2-FONT-SIZE",
  "WDS-TYPOGRAPHY--H2--LINE-HEIGHT": "WDS--TEXT--H2-LINE-HEIGHT",
  "WDS-TYPOGRAPHY--H3--FONT-SIZE": "WDS--TEXT--H3-FONT-SIZE",
  "WDS-TYPOGRAPHY--H3--LINE-HEIGHT": "WDS--TEXT--H3-LINE-HEIGHT",
  "WDS-TYPOGRAPHY--H4--FONT-SIZE": "WDS--TEXT--H4-FONT-SIZE",
  "WDS-TYPOGRAPHY--H4--LINE-HEIGHT": "WDS--TEXT--H4-LINE-HEIGHT",
  "WDS-TYPOGRAPHY--H5--FONT-SIZE": "WDS--TEXT--H5-FONT-SIZE",
  "WDS-TYPOGRAPHY--H5--LINE-HEIGHT": "WDS--TEXT--H5-LINE-HEIGHT",
  "WDS-TYPOGRAPHY--H6--FONT-SIZE": "WDS--TEXT--H6-FONT-SIZE",
  "WDS-TYPOGRAPHY--H6--LINE-HEIGHT": "WDS--TEXT--H6-LINE-HEIGHT",
  "WDS-TYPOGRAPHY--P--FONT-SIZE": "WDS--TEXT--P-FONT-SIZE",
  "WDS-TYPOGRAPHY--P--LINE-HEIGHT": "WDS--TEXT--P-LINE-HEIGHT",
} satisfies Tokens;

export default tokens;
