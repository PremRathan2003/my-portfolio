import React from 'react'
import '../Services/Services.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import Skills_Data from '../../assets/myskills_data' // Correct import for your skills data

const Services = () => {
  return (
    <div id="skills" className='services'>
        <div className="services-title">
            <h1>My Skills</h1>
            <img src={theme_pattern} alt="theme pattern" />
        </div>
        <div className="services-container">
            {Skills_Data.map((skill, index) => {  // Fixed typo here, changing "sk=kill" to "skill"
                return (
                    <div key={index} className='services-format'>
                        <h2>{skill.skill_name}</h2>
                        <div className="services-icon">
                            <img src={skill.skill_img} alt={skill.skill_name} />
                        </div>
                       
                    </div>
                );
            })}
        </div>
    </div>
  );
}

export default Services;
