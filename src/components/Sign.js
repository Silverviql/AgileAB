import React, {Component} from 'react';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

import { browserHistory } from 'react-router'
import Screen from '../utils/Screen';

import Designer from '../image//designer.svg';
import Programmer from '../image//programmer.svg';
import QAengineer from '../image//QAengineer.svg';
import Scram from '../image//scram.svg';

const Styles = {
  main: {
    height: Screen.height,
    //backgroundColor: 'rgba(61, 80, 105, 0.9)',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    overflow: 'hidden'
  },
  desig: {
    width: '20%',
    marginLeft: '100px'
  },
  prog: {
    width: '20%',
    marginRight: '200px'
  },
  QAengin: {
    width: '20%'
  },
  scram: {
    width: '20%'
  },
  input:{
  //  textAlign: 'center',
    сolor: 'rgba(0, 0, 0, 0.9)',
    width: '80%'
  },
  button:{
    width: '80%'
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
              <div style={Styles.main}>
               {/*<h2>Sign up</h2>*/}
                <img src={Designer}  style={Styles.desig}/>
                <img src={Programmer} style={Styles.prog}/>
                <img src={QAengineer} style={Styles.QAengin}/>
                <img src={Scram} style={Styles.scram}/>
                {/*<img src={AgileSvg} style={Styles.logo}/>*/}
                <TextField hintText="Username"  style={Styles.input} />
                {/*<TextField hintText="Username"  inputStyle={Styles.input} hintStyle={Styles.input} />*/}

                <TextField hintText="Email" style={Styles.input}  />

                <TextField hintText="Password" style={Styles.input}/>
            
                <TextField hintText="Confirm Password" style={Styles.input} />
                   <br />
                <RaisedButton label="SIGNUP" primary={true} style={Styles.button} onTouchTap={this.onLogin}/>
              </div>
            );
            
        }
}
export default Sign_in;