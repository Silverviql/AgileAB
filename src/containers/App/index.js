import React, {Component} from 'react';
import PropTypes from 'prop-types';
import AppBar from 'compoments/AppBar';

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
