import React, { Component } from 'react'
import { Link } from 'react-router'
import Screen from '../utils/Screen';
import styles from '../css/style.css';
import notFound from '../notFound.svg';

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
    backgroundColor: 'rgba(61, 80, 105, 0.9)',
    display: 'flex',
     justifyContent: 'center',
     alignItems: 'center',
     flexDirection: 'column',
     overflow: 'hidden'
  },
  logo: {
    width: '80%',
  },
 };

export default class NotFound extends Component {


    render(){
      return (
        <div style={Styles.main} >
          <img src={notFound} style={Styles.logo}/>
        </div>
      );
  }

}