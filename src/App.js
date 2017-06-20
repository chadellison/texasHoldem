import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import BackgroundImage from './components/BackgroundImage'
import LoginButton from './components/LoginButton'
import SignUpButton from './components/SignUpButton'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      background: "felt"
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Texas Holdem</h2>
          <LoginButton />
          <SignUpButton />
        </div>
        <BackgroundImage background={this.state.background} />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
