import React, { Component } from 'react'
import { Row, Col, Grid } from 'react-bootstrap'
import './styles.css'


class Column extends Component {
  render() {
    const { title } = this.props
    return (
        <h1
           className='title'
           onClick={(name) => this.props.updateSelectedState(title)}
           onMouseEnter={(name) => this.props.updateHoveredState(title)}
           onMouseLeave={(name) => this.props.updateHoveredState(title)}
           >{title}</h1>
    )
  }
}

export default Column
