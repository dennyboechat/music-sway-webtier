import { createMuiTheme } from '@material-ui/core/styles';

const themeLight = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#02075D',
      contrastText: '#000'
    }
  }
});

export default themeLight;