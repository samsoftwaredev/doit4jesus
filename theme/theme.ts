import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#173c58', dark: '#0d293f', light: '#527993', contrastText: '#fff' },
    secondary: { main: '#a77c77', light: '#ead9d2', dark: '#805a58' },
    background: { default: '#fcfaf7', paper: '#fff' },
    text: { primary: '#183147', secondary: '#526370' },
    divider: '#e4e7e6',
  },
  typography: {
    fontFamily: 'Arial, Helvetica, sans-serif',
    h1: { fontFamily: 'Georgia, Times New Roman, serif', fontWeight: 700, letterSpacing: '-0.045em', lineHeight: 1.09 },
    h2: { fontFamily: 'Georgia, Times New Roman, serif', fontWeight: 700, letterSpacing: '-0.035em', lineHeight: 1.14 },
    h3: { fontFamily: 'Georgia, Times New Roman, serif', fontWeight: 700, letterSpacing: '-0.02em' },
    h4: { fontFamily: 'Georgia, Times New Roman, serif', fontWeight: 700 },
    body1: { lineHeight: 1.75 },
    body2: { lineHeight: 1.65 },
    button: { textTransform: 'none', fontWeight: 700, letterSpacing: 0 },
  },
  shape: { borderRadius: 18 },
  components: {
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: { borderRadius: 999, minHeight: 48, paddingInline: 25 },
        containedPrimary: { '&:hover': { backgroundColor: '#0d293f' } },
      },
    },
    MuiLink: { styleOverrides: { root: { textUnderlineOffset: 4 } } },
  },
});
