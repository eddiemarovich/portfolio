import React from 'react'

import eM from '../assets/EM.svg'
import fullName from '../assets/EDDIEMAROVICH.svg'
import developer from '../assets/DEVELOPER.svg'

const Logo = () => {
  return (
    <div className="home__logo">
      <div className="home__logo-main">
        <img src={eM} style={{height:'250px'}} alt='initials' />
        <img src={fullName} className='logo__full-name' alt='eddie marovich'/>
      </div>
      <img className="home__logo-side" alt='developer' src={developer}/>
    </div>
  )
}

export default Logo
