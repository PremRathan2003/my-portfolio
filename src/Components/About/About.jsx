import React from 'react';
import '../About/About.css';
import about_img from '../../assets/about_img.jpg'
import theme_pattern from '../../assets/theme_pattern.svg';

const About = () => {
  return (
    <div id="about" className='about'>
      <div className='about-title'>
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className='about-sections'>
        <div className='about-left'>
          <img src={about_img} alt="" className='profile-image'/>
        </div>
        <div className='about-right'>
          <div className="about-para">
            <p>
              MEng student in Electronic & Computer Engineering at DCU with expertise in Software Development, IoT, and web technologies. Passionate about applying hands-on experience in software and hardware development to cutting-edge technological advancements.
            </p>
          </div>
          <div className='about-education'>
            <h2>Education</h2>
            <div className="education-item">
              <h3>Dublin City University, Dublin, Ireland</h3>
              <p><strong>Master of Engineering (MEng) in Electronic and Computer Engineering</strong></p>
              <p>Sept 2024 – Aug 2025 (Ongoing)</p>
            </div>
            <div className="education-item">
              <h3>Lakireddy Bali Reddy College of Engineering, JNTUK, India</h3>
              <p><strong>Bachelor of Technology (B.Tech) in Electronics and Communication Engineering (ECE)</strong></p>
              <p>June 2020 – April 2024</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;