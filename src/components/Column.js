import React, { Component } from 'react'
import { Row, Col, Grid } from 'react-bootstrap'
import './styles.css'


class Column extends Component {

  displaySectionContent() {
    if (this.props.currentHoveredSection === this.props.title){
      return this.props.content
    }
    // return
  }

  render() {
    const { title } = this.props
    return (
      <div className='content-container'>
        <h1
           className='content-container__title'
           onClick={(name) => this.props.updateSelectedState(title)}
           onMouseEnter={(name) => this.props.updateHoveredState(title)}
           onMouseLeave={(name) => this.props.updateHoveredState(title)}
           >{title}</h1>
        <p
          className='content-container__content'
          >{this.displaySectionContent()}</p>
      </div>

    )
  }
}

export default Column
