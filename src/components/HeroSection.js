import React from 'react'
import { Button } from './Button'
import '../App.css'
import './HeroSection.css'

function HeroSection() {
  return (
    <div className='hero-container'>
        {/* <video src='videos/video-2.mp4' autoPlay loop muted/>  */}
        <h1>WELCOME</h1>
        <div className='hero-para'>
          <p>Connecting You to the Best Products Across the Globe!</p>
        </div>
        <div className='hero-btns'>
            <Button className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
            onClick='/about-us'>
                KNOW MORE
            </Button>
        </div>
    </div>
  )
}

export default HeroSection