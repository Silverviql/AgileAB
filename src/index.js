import React from 'react';
import ReactDOM from 'react-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import AgileAB from './AgileAB';
import registerServiceWorker from './registerServiceWorker';

injectTapEventPlugin();

ReactDOM.render(<MuiThemeProvider><AgileAB /></MuiThemeProvider>, document.getElementById('root'));
registerServiceWorker();