import React, {Component} from 'react';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

import { browserHistory } from 'react-router'


const style = {
  marginLeft: 20,
   margin: 10,

 
  log_in: {
    cursor: 'pointer',
    position: 'absolute',
    top: 100,
    bottom: 0,
    right: 100,
    left: 0,
    width: '100%',
    opacity: 0,
  }
};

class Sign_in extends Component {
  constructor(...args){
    super(...args);

    this.onLogin = this.onLogin.bind(this);
  }

  onLogin(){
  browserHistory.push('/login');
  }

    render(){
      return (
          <div>
            <Paper zDepth={2}>
              <TextField hintText="Username" style={style} underlineShow={false} />
              <Divider />
              <TextField hintText="Email" style={style} underlineShow={false} />
              <Divider />
              <TextField hintText="Password" style={style} underlineShow={false} />
              <Divider />
              <TextField hintText="Confirm Password" style={style} underlineShow={false} />
              <Divider />
              <RaisedButton label="SIGNUP" primary={true} style={style} onTouchTap={this.onLogin} />
              <Divider />
            </Paper>
        </div>
    );
  }
}

export default Sign_in;