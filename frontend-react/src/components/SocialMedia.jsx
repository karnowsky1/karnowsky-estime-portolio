import React from 'react'
import { BsLinkedin, BsGithub, BsFacebook } from 'react-icons/bs'

const SocialMedia = () => {
  return (
    <div className='app__social'>
      <a href="https://www.linkedin.com/in/karnowsky-estime/" target="_blank" rel="noopener noreferrer">
        <BsLinkedin />
      </a>
      <a href="https://github.com/karnowsky1" target="_blank" rel="noopener noreferrer">
        <BsGithub />          
      </a>
      <a href="https://www.facebook.com/karnowsky.estime/" target="_blank" rel="noopener noreferrer">
        <BsFacebook />
      </a>
    </div>
  )
}

export default SocialMedia