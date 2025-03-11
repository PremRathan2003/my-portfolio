import React from 'react';
import '../MyWork/MyWork.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mywork_data from '../../assets/mywork_data';

const MyWork = () => {
  return (
    <div id="work" className="mywork">
      <div className="mywork-title">
        <h1>My Projects</h1>
        <img src={theme_pattern} alt="theme pattern" />
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index) => (
          <a key={index} href={work.url} target="_blank" rel="noopener noreferrer" className="project-card">
            <img src={work.w_img} alt={work.w_name} />
            <div className="project-overlay">
              <span className="project-name">{work.w_name}</span>
            </div>
          </a>
        ))}
      </div>
      <div className="mywork-showmore">
        <p>50+ Projects Done</p>
      </div>
    </div>
  );
};

export default MyWork;
