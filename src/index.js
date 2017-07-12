import 'normalize.css';
import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import AgileAB from './containers/AgileAB'
import Admin from './components/Admin'
import Genre from './components/Genre'
import Home from './components/Home'
import NotFound from './components/NotFound'

import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';

import { Router, Route, IndexRoute, browserHistory } from 'react-router'

injectTapEventPlugin();

ReactDOM.render(
<MuiThemeProvider>
    
<Router history={browserHistory}>
    <Route path='/' component={AgileAB}>
      <IndexRoute component={Home} />
      <Route path='admin' component={Admin} />
      <Route path='genre' component={Genre} />
    </Route>
       {/* для всех остальных роутов: показывай NotFound */}
    <Route path='*' component={NotFound} />
  </Router>


</MuiThemeProvider>, 
document.getElementById('root')
);
registerServiceWorker();
