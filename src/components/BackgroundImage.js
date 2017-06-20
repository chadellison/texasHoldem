import React, { Component } from 'react';
import aces from '../images/aces.png'
import '../styles/backgroundImage.css'
export default class BackgroundImage extends Component {
  render() {
    return(
      <div>
        <img src={aces} alt='image of aces' className='background' />
      </div>
    )
  }
}
