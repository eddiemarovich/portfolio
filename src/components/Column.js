import React, {Component} from 'react'
import { Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import classNames from 'classnames'
import './styles.css'

class Column extends Component {

  displaySectionContent() {
    if (this.props.hoveredSection === this.props.title) {
      return this.props.content
    }
  }

  renderBackgroundImage(title) {
    const { hoveredSection } = this.props
    if (hoveredSection === 'about' && hoveredSection === title){
      return this.props.pictures.climb
    } else if (hoveredSection === 'portfolio' && hoveredSection === title){
      return this.props.pictures.phone
    } else if (hoveredSection === 'contact' && hoveredSection === title){
      return this.props.pictures.smile
    }
  }


  render() {
    const { title, hoveredSection, selectedSection } = this.props
    return (
      <Col className={classNames('content-section', {
        'content-section--hovered': hoveredSection === `${title}`
      }, {
        'content-section--selected': selectedSection === `${title}`
      })} style={{
        backgroundImage: `url(${this.renderBackgroundImage(title)})`
      }}   md={4}>
        <div className='content-container'>
          <h1
            className='content-container__title'
            onClick={(name) => this.props.updateSelectedState(title)}
            onMouseEnter={(name) => this.props.updateHoveredState(title)}
            onMouseLeave={(name) => this.props.updateHoveredState(title)}>
            <Link className={classNames('link', {'link--active': hoveredSection === `${title}`})} style={{textDecoration: 'none'}} to={`/${title}`}>{title.toUpperCase()}</Link>

          </h1>
          <p className='content-container__content'>{this.displaySectionContent()}</p>
        </div>
      </Col>
    )
  }
}

export default Column
