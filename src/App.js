import React, { Component } from 'react';
import eM from './assets/EM.svg';
import fullName from './assets/EDDIEMAROVICH.svg';
import developer from './assets/DEVELOPER.svg'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="">
        <div className= 'container'>
          <div className= "top-row">
            <img className= "initials" src={eM}></img>
            <img className= "developer" src={developer}></img>
          </div>
          <img className= "full-name" src={fullName}></img>
        </div>
        <div className="navbar">
          <ul className="nav-list">
            <li>about</li>
            <li>portfolio</li>
            <li>contact</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default App;
