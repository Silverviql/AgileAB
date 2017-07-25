import React, { Component } from 'react';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

import Screen from 'utils/Screen';

import { browserHistory } from 'react-router';

import AgileSvg from 'image/agile.svg';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


import * as UserActions from 'actions/UserActions'

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
  logo: {
    width: '50%'
  },
  input: {
    //  textAlign: 'center',
    сolor: 'rgba(0, 0, 0, 0.9)',
    width: '80%'
  },
  button: {
    width: '80%'
  }
};

class LoginPage extends Component {

  state = {
    authData: {
      login: ''
    },
    authPass: {
      password: ''
    },
    testDate: {
      login: "user",
      password: "user"
    }
  };

  constructor(...args) {
    super(...args);

    this.onSign = this.onSign.bind(this);
    this.onAuth = this.onAuth.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onPass = this.onPass.bind(this);
  }

 onAuth() {
  // console.log(this.state.authData.login );
  // console.log(this.state.authData.password );
    if(this.state.authData.login == this.state.testDate.login){
        browserHistory.push('/');
    }
    if(this.state.authPass.password == this.state.testDate.password){
        browserHistory.push('/');
    }
      else {
        console.log("Неверный логин или пароль")
      }
  }

  onSign() {
    browserHistory.push('/sign');
  }

  onChange(e) {
    if(!e.target.value){
      console.error("no login")
    }
    // else { 
    //   console.log("Authenticated successfully")
    // }
    this.setState({
      authData: {
        login: e.target.value
      }
    })
  }

  onPass(e) {
      if(!e.target.value){
      console.error("no pass")
    }
      this.setState({
      authPass: {
        password: e.target.value
      }
    })
  }

  render() {
    return (
      <div style={Styles.main}>
        <img src={AgileSvg} style={Styles.logo} />
        <TextField
          hintText="Username"
          style={Styles.input}
          value={this.state.authData.login} 
          onChange={this.onChange} />

        <TextField 
          hintText="Password" 
          style={Styles.input}
        value={this.state.authPass.password} 
          onChange={this.onPass} 
          /> 

        <br />
        <RaisedButton label="LOG IN" primary={true} style={Styles.button} type='submit' onTouchTap={this.onAuth} />

        <FlatButton label="Sign up" primary={true} style={Styles.button} onTouchTap={this.onSign} />

      </div>

    )
  }
}
function mapStateToProps() {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(UserActions, dispatch)
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);