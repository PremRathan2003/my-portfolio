import React, { useEffect } from 'react';
import '../Services/Services.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import Skills_Data from '../../assets/myskills_data';

const Services = () => {

  // ⭐ MOUSE-FOLLOW 3D TILT EFFECT
  useEffect(() => {
    const cards = document.querySelectorAll(".services-format");

    cards.forEach(card => {
      card.addEventListener("mousemove", e => {
        const rect = card.getBoundingClientRect();
        let x = e.clientX - rect.left;
        let y = e.clientY - rect.top;

        let centerX = rect.width / 2;
        let centerY = rect.height / 2;

        let rotateX = ((y - centerY) / 12).toFixed(2);
        let rotateY = ((centerX - x) / 12).toFixed(2);

        card.style.transform = `
          rotateX(${rotateX}deg)
          rotateY(${rotateY}deg)
          translateY(-8px)
        `;
      });

      card.addEventListener("mouseleave", () => {
        card.style.transform = "rotateX(0) rotateY(0)";
      });
    });
  }, []);

  return (
    <div id="skills" className="services">
      <div className="services-title">
        <h1>My Skills</h1>
        <img src={theme_pattern} alt="theme pattern" />
      </div>

      <div className="services-container">
        {Skills_Data.map((skill, index) => {
          return (
            <div key={index} className="services-format">
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
};

export default Services;
