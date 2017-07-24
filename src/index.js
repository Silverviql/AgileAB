import 'normalize.css';

import React from 'react';
import ReactDOM from 'react-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import { Provider } from 'react-redux'
import configureStore from './store/configureStore';

import registerServiceWorker from './registerServiceWorker';

import App from 'containers/App';
import Home from 'compoments/Home';
import NotFound from 'compoments/NotFound';
import Login from 'containers/Login';
import Sign from 'compoments/Sign';
import Table from 'compoments/Table';
import Tabs from 'compoments/Tabs';

injectTapEventPlugin();

/*class Model extends EventEmmiter{}

class User extends Model{
    isGuest = true;
}*/
const store = configureStore()

function needAuth(){
   /* User.on('logged', ()=>{
        
    })*/
    const isGuest = false;
    if(isGuest){
        browserHistory.push('/login')
    }
}

ReactDOM.render(
    <Provider store={store} >
        <MuiThemeProvider>    
        <Router history={browserHistory}>
            <Route path='/' component={App} onEnter={needAuth}>
            <IndexRoute component={Home}/>
            <Route path='/table' component={Table} />
            <Route path='/swipe' component={Tabs} />
            </Route>
            <Route path='/login' component={Login} />
            <Route path='/sign' component={Sign} />
            {/* для всех остальных роутов: показывай NotFound */}
            <Route path='*' component={NotFound} />
        </Router>
        </MuiThemeProvider>
    </Provider>
, 
document.getElementById('root')
);
registerServiceWorker();
