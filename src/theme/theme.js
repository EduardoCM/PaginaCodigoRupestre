import { createMuiTheme } from '@material-ui/core/styles'


const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  },
  palette: {
    primary : {
      main : '#5DADE2'
    },
    common: {
      white : 'white'
    },
    secondary: {
      main: '#e53935'
    }
  },
  spacing : 10
});


export default theme;
