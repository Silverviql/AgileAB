import React, { Component } from 'react'
import { Link } from 'react-router'
import Screen from '../utils/Screen';
import styles from '../css/style.css';
import notFound from '../notFound.gif';

const Styles = {
  //   wrapper: {
  //  backgroundImage: `url(${notFound})`,
  //  backgroundRepeat: 'no-repeat',
  //   backgroundSize: '100%',
  //   backgroundPosition: '65% 50%',
  //   height: Screen.height,
  //   display: 'flex',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   flexDirection: 'column'
  // },
  // img: {
  //   marginLeft: '10%',
  //   width: '60%'
  // },
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