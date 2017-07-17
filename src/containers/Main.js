import React, {Component} from 'react';
import AppBar from '../components/AppBar'
import PropTypes from 'prop-types';

export default class Main extends Component{

    static propTypes = {
        children: PropTypes.object,
         }

   render() {
    return (
         <div>
      <AppBar/>

      {this.props.children}
       </div>
    );
  }
}
