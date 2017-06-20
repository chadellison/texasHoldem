import React, { Component } from 'react'
import aces from '../images/aces.png'
import felt from '../images/felt.png'
import '../styles/backgroundImage.css'
export default class BackgroundImage extends Component {
  render() {
    let background;
    if(this.props.background === "aces") {
      background = aces
    } else {
      background = felt
    }

    return(
      <div>
        <img src={background} alt='image of aces' className='background' />
      </div>
    )
  }
}
