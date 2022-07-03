import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'

const HeaderSocial = () => {
  return (
    <div className='header_socials'>
    <a href='https://www.linkedin.com/in/faremi-ezekiel-2a38b1239/' target="_blank"><BsLinkedin /></a>
    <a href='https://github.com/Ecoder2202' target="_blank"><BsGithub /></a>
    <a href='https://twitter.com/home' target='_blank'><BsTwitter /></a>

    </div>
  )
}

export default HeaderSocial