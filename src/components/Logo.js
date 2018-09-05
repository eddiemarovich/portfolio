import React from 'react'
import classNames from 'classnames'

import eM from '../assets/EM.svg'
import fullName from '../assets/EDDIEMAROVICH.svg'
import developer from '../assets/DEVELOPER.svg'

const Logo = (props) => {
  return (
    <div className={classNames("home__logo", {"home__logo--inactive": props.hoveredSection !== null})}>
      <div className="home__logo-main">
        <img src={eM} style={{height:'250px'}} alt='initials' />
        <img src={fullName} className='logo__full-name' alt='eddie marovich'/>
      </div>
      <img className="home__logo-side" alt='developer' src={developer}/>
    </div>
  )
}

export default Logo
