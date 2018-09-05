import React, { Component } from 'react'
import { Row } from 'react-bootstrap'
import classNames from 'classnames'

import About from './About'
import Portfolio from './Portfolio'
import Contact from './Contact'
import Main from './Main'
import '../App.css'


class Home extends Component {

  constructor(props){
    super(props)

    this.state = {
      selectedSection: null,
      hoveredSection: null
    }
  }

  updateHoveredState = (name) => {
    if (this.state.hoveredSection !== name){
      this.setState({hoveredSection: name})
    } else if (this.state.hoveredSection === name){
      this.setState({hoveredSection: null})
    }
  }

  updateSelectedState = (name) => {
    if (this.state.selectedSection !== name){
      this.setState({selectedSection: name, hoveredSection: null})
    } else if (this.state.selectedSection === name){
      this.setState({selectedSection: null})
    }
  }

  contentToRender() {
    const { hoveredSection, selectedSection } = this.state
    if (selectedSection === null){
      return (
        <Main
          updateSelectedState={(name) => this.updateSelectedState(name)}
          updateHoveredState={(name) => this.updateHoveredState(name)}
          hoveredSection={hoveredSection}
          selectedSection={selectedSection}/>
      )
    } else if (selectedSection === 'about'){
      return (
        <About section={selectedSection} />
     )
   }
   else if (selectedSection === 'portfolio'){
      return (
        <Portfolio section={selectedSection} />
     )
   }
   else if (selectedSection === 'contact'){
      return (
        <Contact section={selectedSection} hey='hey'/>
     )
   }
  }

  render() {
    const { hoveredSection, selectedSection } = this.state
      return (
        <Row className={classNames('home', {'home--inactive': hoveredSection !== null})}>
          {this.contentToRender()}
        </Row>
      )
    }
}


export default Home
