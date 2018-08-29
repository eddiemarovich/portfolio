import React, { Component } from 'react'
import Logo from './Logo'
import Column from './Column'
import data from '../json'
import slab from '../assets/slab.jpg'
import myFace from '../assets/myface.jpg'
import myFace2 from '../assets/myface2.jpg'
import belaytionship from '../assets/belaytionship.png'

const pictures = {
  climb: slab,
  smile: myFace2,
  grr: myFace,
  phone: belaytionship
}

class Main extends Component {
  constructor(props){
    super(props)

    this.state = {
      pictures: null
    }
  }

  componentDidMount(){
    this.setState({pictures})
  }

  render() {
    return (
      <div>
        <Logo />
        <div>
          {data.map(e => {
            return (
              <Column
                key={e.id}
                title={e.title}
                pictures={this.state.pictures}
                content={e.content}
                updateSelectedState={(name) => this.props.updateSelectedState(name)}
                updateHoveredState={(name) => this.props.updateHoveredState(name)}
                hoveredSection={this.props.hoveredSection}
                selectedSection={this.props.selectedSection}
              />
            )
          })}
        </div>
      </div>
    )
  }
}

export default Main
