import 'normalize.css';
import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Main from './containers/Main';
import Home from './components/Home';
import NotFound from './components/NotFound';
import Login from './components/Login';
import Sign from './components/Sign';
import Table from './components/Table';
import Tabs from './components/Tabs';


import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';

import { Router, Route, IndexRoute, browserHistory } from 'react-router'

injectTapEventPlugin();

/*class Model extends EventEmmiter{}

class User extends Model{
    isGuest = true;
}*/

function needAuth(){
   /* User.on('logged', ()=>{
        
    })*/
    const isGuest = false;
    if(isGuest){
        browserHistory.push('/auth')
    }
}

ReactDOM.render(
<MuiThemeProvider>
    
<Router history={browserHistory}>
    <Route path='/' component={Main} onEnter={needAuth}>
      <IndexRoute component={Home} />
      <Route path='/table' component={Table} />
      <Route path='/swipe' component={Tabs} />
    </Route>

    <Route path='/login' component={Login} />
    <Route path='/sign' component={Sign} />
       {/* для всех остальных роутов: показывай NotFound */}
    <Route path='*' component={NotFound} />
  </Router>


</MuiThemeProvider>, 
document.getElementById('root')
);
registerServiceWorker();
