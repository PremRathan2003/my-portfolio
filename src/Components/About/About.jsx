import React, { useEffect } from "react";
import "../About/About.css";
import about_img from "../../assets/about_img.jpg";
import theme_pattern from "../../assets/theme_pattern.svg";

const About = () => {
  
  // ⭐ Scroll Animation
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const handleScroll = () => {
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          el.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="about" className="about">
      <div className="about-title reveal">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="pattern" />
      </div>

      <div className="about-sections reveal">
        
        {/* LEFT SIDE IMAGE */}
        <div className="about-left">
          <img src={about_img} alt="Prem Rathan" className="profile-image" />
        </div>

        {/* RIGHT SIDE CONTENT */}
        <div className="about-right">
          <div className="about-para">
            <p>
              MEng student in Electronic & Computer Engineering at DCU with
              expertise in Software Development, IoT, and web technologies.
              Passionate about applying hands-on experience in software and
              hardware development to cutting-edge technological advancements.
            </p>
          </div>

          {/* EDUCATION SECTION */}
          <div className="about-education">
            <h2>Education</h2>

            <div className="education-container">
              <div className="education-item">
                <h3>Dublin City University — Ireland</h3>
                <p>
                  <strong>MEng in Electronic & Computer Engineering</strong>
                </p>
                <p>Sept 2024 – Aug 2025 (Ongoing)</p>
              </div>

              <div className="education-item">
                <h3>Lakireddy Bali Reddy College of Engineering — India</h3>
                <p>
                  <strong>
                    B.Tech in Electronics & Communication Engineering (ECE)
                  </strong>
                </p>
                <p>June 2020 – April 2024</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
