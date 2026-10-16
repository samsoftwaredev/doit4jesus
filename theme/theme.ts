import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#173c58', dark: '#0d293f', light: '#527993', contrastText: '#fff' },
    secondary: { main: '#a77c77', light: '#ead9d2', dark: '#805a58' },
    background: { default: '#fafaf8', paper: '#fff' },
    text: { primary: '#252525', secondary: '#4d5d69' },
    divider: '#e4e7e6',
  },
  typography: {
    fontFamily: 'var(--font-geist-sans), Arial, Helvetica, sans-serif',
    h1: { fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif', fontWeight: 400, letterSpacing: '-0.045em', lineHeight: 1.1 },
    h2: { fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif', fontWeight: 400, letterSpacing: '-0.04em', lineHeight: 1.15 },
    h3: { fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif', fontWeight: 400, letterSpacing: '-0.03em' },
    h4: { fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif', fontWeight: 400 },
    h5: { fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif', fontWeight: 400 },
    h6: { fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif', fontWeight: 400 },
    body1: { lineHeight: 1.75 },
    body2: { lineHeight: 1.65 },
    button: { textTransform: 'none', fontWeight: 700, letterSpacing: 0 },
  },
  shape: { borderRadius: 18 },
  components: {
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: { borderRadius: 999, minHeight: 44, paddingInline: 25, transition: 'transform 200ms ease, filter 200ms ease, background-color 200ms ease', '&:hover': { transform: 'scale(1.035)' } },
        containedPrimary: { '&:hover': { backgroundColor: '#0d293f' } },
      },
    },
    MuiLink: { styleOverrides: { root: { textUnderlineOffset: 4 } } },
  },
});
