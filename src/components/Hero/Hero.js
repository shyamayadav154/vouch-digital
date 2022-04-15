import React from 'react'
import Login from '../Login/Login'
import './hero.styles.scss'
import im from '../../assets/DrawKit Vector Illustration Team Work (11).png'


const Hero = () => {
  return (
    <div className='hero'>
      <div className='left'>
        <Login />
      </div>
      <div className='right'>
        <img src={im} alt='log-in' className='side-img' />
        
      </div>
    </div>
  )
}

export default Hero
