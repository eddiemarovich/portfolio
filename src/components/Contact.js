import React, { Component } from 'react'
import {
  Grid,
  // Col,
  // Row
} from 'react-bootstrap'

import SectionHeader from './SectionHeader'
import './styles.css'

class Contact extends Component {

  render() {
    return (
      <div className="home">
        <Grid className="section__container">
          <SectionHeader section='Contact' closeSection={() => this.props.closeSection()}/>
        </Grid>
      </div>
    )
  }
}

export default Contact
