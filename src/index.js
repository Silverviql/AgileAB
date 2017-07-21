import 'normalize.css';
import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Main from './containers/App';
import Home from './components/Home';
import NotFound from './components/NotFound';
import Login from './containers/Login';
import Sign from './components/Sign';
import Table from './components/Table';
import Tabs from './components/Tabs';

import { Provider } from 'react-redux'
import configureStore from './store/configureStore';

import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';

import { Router, Route, IndexRoute, browserHistory } from 'react-router'

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
        browserHistory.push('/auth')
    }
}

ReactDOM.render(
    <Provider store={store} >
        <MuiThemeProvider>    
        <Router history={browserHistory}>
            <Route path='/' component={Login} onEnter={needAuth}>
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
