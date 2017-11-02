import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import App from './components/App';
import theme from './theme';
import './index.css';
import 'typeface-roboto';
import registerServiceWorker from './registerServiceWorker';

const muiTheme = getMuiTheme(theme);

ReactDOM.render(
  <MuiThemeProvider muiTheme={getMuiTheme(muiTheme)}>
    <App />
  </MuiThemeProvider>,
  document.getElementById('root'),
);
registerServiceWorker();
