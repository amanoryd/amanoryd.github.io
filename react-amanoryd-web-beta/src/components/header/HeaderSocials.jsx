import React from 'react'
import {BsFacebook, BsInstagram, BsTwitter} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.instagram.com/amano_reformas/" target='_blank'><BsInstagram/></a>
        <a href="https://www.facebook.com/amano_reformas/" target='_blank'><BsFacebook/></a>
        <a href="https://www.twitter.com/amano_reformas/" target='_blank'><BsTwitter/></a>
    </div>
  )
}

export default HeaderSocials