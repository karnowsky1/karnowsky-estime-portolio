import React from 'react'
import { BsLinkedin, BsGithub, BsFacebook } from 'react-icons/bs'

const SocialMedia = () => {
  return (
    <div className='app__social'>
      <div>
        <BsLinkedin />
      </div>
      <div>
        <BsGithub />
      </div>
      <div>
        <BsFacebook />
      </div>
    </div>
  )
}

export default SocialMedia