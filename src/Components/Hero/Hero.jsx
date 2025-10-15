import React from 'react'
import '../Hero/Hero.css'
import profile_img from '../../assets/profile_img.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id = "home" className='hero'>
        <img src={profile_img} alt ="profile" className='profile-img' />
        <h1><span>I'm Prem Rathan, </span></h1>
        <p>Full Stack Software Developer in Training (MEng). Specializing in Web Technologies (frontend/backend) with an innovative cross-domain focus on IoT and Wireless Systems. Driven to design, develop, and deploy scalable solutions from the cloud to the device.</p>
        <div className='hero-action'>
            <div className='hero-connect'><AnchorLink className="anchor-link" offset={50} href='#contact'>Connect With Me </AnchorLink></div>
            <div className='hero-resume'>
              <a href="https://drive.google.com/file/d/1mj_9pDKWi7VIRTeJQHzDqV7k30ORTMkU/view?usp=sharing" 
              className="resume-button" target="_blank" rel="noopener noreferrer">
              My Resume
              </a>
          </div>
        </div>
    </div>
  )
}

export default Hero