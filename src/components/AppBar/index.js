import React, { Component } from 'react';

import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

import { Link } from 'react-router'
import { browserHistory } from 'react-router'

class Login extends Component {
  static muiName = 'FlatButton';

  constructor(...args) {
    super(...args);

    this.settingOut = this.settingOut.bind(this);
  }


  settingOut() {
    browserHistory.push('/login');
  }



  render() {
    return (
      <div>
        <FlatButton label="Login" onTouchTap={this.settingOut} {...this.props} />
      </div>
    );
  }
}

const Logged = (props) => (

  <IconMenu
    {...props}
    iconButtonElement={
      <IconButton><MoreVertIcon /></IconButton>
    }
    targetOrigin={{ horizontal: 'right', vertical: 'top' }}
    anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
  >
    <MenuItem primaryText="Refresh" />
    <MenuItem primaryText="Help" />
    <MenuItem onTouchTap={this.settingOut} >Sign out</MenuItem>
  </IconMenu>
);

Logged.muiName = 'IconMenu';


const styles = {
  menu: {
    boxShadow: 'rgba(0, 0, 0, 0)',
  },
};

/**
 * This example is taking advantage of the composability of the `AppBar`
 * to render different components depending on the application state.
 */
class Bar extends Component {


  constructor(...args) {
    super(...args);

    this.state = {
      menuOpen: false,
      logged: false,
    }
    this.menuHome = this.menuHome.bind(this);
    this.menuToggle = this.menuToggle.bind(this);
    this.menuTable = this.menuTable.bind(this);
    this.menuGrid = this.menuGrid.bind(this);
  }


  menuToggle() {
    this.setState({
      menuOpen: !this.state.menuOpen
    })
  }
  menuHome() {
    browserHistory.push('/');
  }

  menuTable() {
    browserHistory.push('/swipe');
  }

   menuGrid() {
    browserHistory.push('/grid');
  }

  handleChange = (event, logged) => {
    this.setState({ logged: logged });
  };

  render() {
    return (
      <div>
        {/* <Toggle
          label="Logged"
          defaultToggled={true}
          onToggle={this.handleChange}
          labelPosition="right"

        /> */}
        <AppBar
          title="Menu" style={styles.menu}
          onLeftIconButtonTouchTap={this.menuToggle}
          iconElementRight={this.state.logged ? <Logged /> : <Login />}
        />
        <Drawer open={this.state.menuOpen} docked={false} onRequestChange={(open, reason) => this.setState({ menuOpen: open })}>
          <br/>
          <MenuItem onTouchTap={this.menuHome} >Main</MenuItem>
          <MenuItem onTouchTap={this.menuTable} >Table</MenuItem>
          <MenuItem onTouchTap={this.menuGrid} >Grid</MenuItem>
        </Drawer>
        {/* добавили вывод потомков */}
        {this.props.children}
      </div>
    );
  }
}

export default Bar;
