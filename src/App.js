import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import About from './components/About'
import Portfolio from './components/Portfolio'
import Home from './components/Home'
import Contact from './components/Contact'
import './App.css'

class App extends Component {

  render() {
    return (
      <Router>
        <div className="app">
          <Route
            exact
            path="/"
            component={Home}>
          </Route>
          <Route
            exact
            path="/about"
            component={About}>
          </Route>
          <Route
            exact
            path="/portfolio"
            component={Portfolio}>
          </Route>
          <Route
            exact
            path="/contact"
            component={Contact}>
          </Route>
        </div>
      </Router>
    )
  }
}

export default App;
