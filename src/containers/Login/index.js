import React, {Component} from 'react';
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
  input:{
  //  textAlign: 'center',
    сolor: 'rgba(0, 0, 0, 0.9)',
    width: '80%'
  },
  button:{
    width: '80%'
  }
};

class LoginPage extends Component {
  constructor(...args){
    super(...args);

    this.onSign = this.onSign.bind(this);
    this.onAuth = this.onAuth.bind(this);
  }

  onAuth(){
    browserHistory.push('/');
  }

  onSign(){
  browserHistory.push('/sign');
  }


   handleSubmit(e) {
    e.preventDefault()
    this.props.actions.login({name: e.target.elements[0].value})
  }


    render(){
      return (
        <div style={Styles.main}>
           <img src={AgileSvg} style={Styles.logo}/> 
          <TextField hintText="Username"  style={Styles.input} onSubmit={this.handleSubmit} />
          {/*<TextField hintText="Username"  inputStyle={Styles.input} hintStyle={Styles.input} />*/}
          <TextField hintText="Password" style={Styles.input}/>
          <br />
          <RaisedButton label="LOG IN" primary={true} style={Styles.button} type='submit'/>
          
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