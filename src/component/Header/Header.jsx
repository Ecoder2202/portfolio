import React from 'react'
import './Header.css'
import Cta from './Cta'
import ME from '../imge/Catoonface-no-bg.png'
import HeaderSocial from './HeaderSocial'

const Header = () => {
  return (
   <header>
    <div className='container header_container'>
      <h5>Hello i'm </h5>
      <h1>Faremi Ezekiel</h1>
      <h5 className='text-light'>Fullstack Developer</h5>
      <Cta />
      <HeaderSocial />
      
      <div className='me'>
<img src=  {ME} alt= 'me'/>
      </div>
      <a href= '#contact' ></a>
   </div>
   </header>
  )
}

export default Header