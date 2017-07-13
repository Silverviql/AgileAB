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

class Log_in extends Component {
  constructor(...args){
    super(...args);

    this.onSign = this.onSign.bind(this);
  }

  onSign(){
  browserHistory.push('/sign');
  }

    render(){
      return (
          <div>
            <Paper zDepth={2}>
              <TextField hintText="Username" style={style} underlineShow={false} />
              <Divider />
              <TextField hintText="Password" style={style} underlineShow={false} />
              <Divider />
              <RaisedButton label="LOG IN" primary={true} style={style} />
              <Divider />
              <FlatButton label="Sign up" primary={true} onTouchTap={this.onSign} />
            </Paper>
        </div>
    );
  }
}

export default Log_in;