import { createMuiTheme } from '@material-ui/core/styles';

const themeDark = createMuiTheme({
  palette: {
    type: 'dark',
    background: {
      default: "#000"
    },
    primary: {
      main: '#00BFFF',
      contrastText: '#FFF'
    },
  },
});

export default themeDark;