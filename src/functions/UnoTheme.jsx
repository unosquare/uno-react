import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

export const UnoTheme = createMuiTheme({
    palette: {
      error: {
        main: '#f44336',
      },
      primary: {
        main: '#304FF3',
      },
      secondary: {
        main: '#5c5b5b',
      },
      text: {
        primary: '#191919',
        secondary: '#000',
      },
    },
    typography: {
      useNextVariants: true,
    },
});
