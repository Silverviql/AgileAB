import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from '../css/style.css';
import notFound from '../image/notFound.gif';
import Screen from '../utils/Screen';

const Styles = {
  main: {
    height: Screen.height,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    display: 'flex',
     justifyContent: 'center',
     alignItems: 'center',
     flexDirection: 'column',
     overflow: 'hidden',
     fontFamily: 'sans-serif',
     fontSize: '22px'
  },
  logo: {
    width: '100%',
  },
  
 };

export default class NotFound extends Component {


    render(){
      return (
        <div style={Styles.main} >
          <img src={notFound} style={Styles.logo}/>
           <p>Page Not Found</p>
        </div>
      );
  }

}