import React, {Component} from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

class Login extends Component {
  static muiName = 'FlatButton';

  render() {
    return (
      <FlatButton {...this.props} label="Login" />
    );
  }
}

const Logged = (props) => (
  <IconMenu
    {...props}
    iconButtonElement={
      <IconButton><MoreVertIcon /></IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
    <MenuItem primaryText="Refresh" />
    <MenuItem primaryText="Help" />
    <MenuItem primaryText="Sign out" />
  </IconMenu>
);

Logged.muiName = 'IconMenu';

/**
 * This example is taking advantage of the composability of the `AppBar`
 * to render different components depending on the application state.
 */
class AppBarExampleComposition extends Component {


    constructor(...args){
    super(...args);

    this.state = {
      menuOpen: false,
      logged: true,
    }

    this.menuToggle = this.menuToggle.bind(this);
  }

  menuToggle(){
    this.setState({
      menuOpen: !this.state.menuOpen
    })
  }

  handleChange = (event, logged) => {
    this.setState({logged: logged});
  };

  render() {
    return (
     <div>
        <Toggle
          label="Logged"
          defaultToggled={true}
          onToggle={this.handleChange}
          labelPosition="right"
          style={{margin: 20}}
        />
        <AppBar
          title="Menu"
        onLeftIconButtonTouchTap={this.menuToggle}
          iconElementRight={this.state.logged ? <Logged /> : <Login />}
        />
         <Drawer open={this.state.menuOpen} docked={false} onRequestChange={(open, reason) => this.setState({menuOpen:open})}>
          <MenuItem>Menu Item</MenuItem>
          <MenuItem>Menu Item 2</MenuItem>
        </Drawer>
      </div>
    );
  }
}

export default AppBarExampleComposition;
