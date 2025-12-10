import React, { useEffect, useState, useRef } from "react";
import "../MyWork/MyWork.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mywork_data from "../../assets/mywork_data";

const MyWork = () => {
  const [activeProject, setActiveProject] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);
  const startY = useRef(null);

  /* ========================= */
  /* ⭐ 3D Tilt Effect */
  /* ========================= */
  useEffect(() => {
    const cards = document.querySelectorAll(".project-card");

    cards.forEach((card) => {
      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        let x = e.clientX - rect.left;
        let y = e.clientY - rect.top;

        let rotateX = ((y - rect.height / 2) / 25).toFixed(2);
        let rotateY = ((rect.width / 2 - x) / 25).toFixed(2);

        card.style.transform = `
          rotateX(${rotateX}deg)
          rotateY(${rotateY}deg)
          scale(1.04)
        `;
      });

      card.addEventListener("mouseleave", () => {
        card.style.transform = "rotateX(0) rotateY(0) scale(1)";
      });
    });
  }, []);

  /* ========================= */
  /* ⭐ Close Popup by ESC Key */
  /* ========================= */
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setActiveProject(null);
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  /* ========================= */
  /* ⭐ Mobile Swipe Down to Close */
  /* ========================= */
  const handleTouchStart = (e) => {
    startY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e) => {
    const endY = e.changedTouches[0].clientY;
    if (endY - startY.current > 120) setActiveProject(null);
  };

  /* ========================= */
  /* ⭐ Image Carousel Controls */
  /* ========================= */
  const nextImage = () => {
    setImageIndex((prev) =>
      prev === activeProject.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setImageIndex((prev) =>
      prev === 0 ? activeProject.images.length - 1 : prev - 1
    );
  };

  return (
    <div id="work" className="mywork">
      <div className="mywork-title">
        <h1>My Projects</h1>
        <img src={theme_pattern} alt="theme pattern" />
      </div>

      {/* ⭐ Project Cards Grid */}
      <div className="mywork-container">
        {mywork_data.map((work, index) => (
          <div
            key={index}
            className="project-card card-animate"
            onClick={() => {
              setActiveProject(work);
              setImageIndex(0);
            }}
          >
            <img src={work.w_img} alt={work.w_name} />

            <div className="project-hover-icons">
              {work.url && <a href={work.url} target="_blank">🔗</a>}
              {work.github && <a href={work.github} target="_blank">🐙</a>}
            </div>

            {work.tech && (
              <div className="project-tech">
                {work.tech.map((tag, i) => (
                  <span key={i}>{tag}</span>
                ))}
              </div>
            )}

            <div className="project-overlay">
              <span className="project-name">{work.w_name}</span>
            </div>
          </div>
        ))}
      </div>

      {/* ⭐ FULL POPUP */}
      {activeProject && (
        <div
          className="project-popup"
          onClick={() => setActiveProject(null)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="popup-content popup-open"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="popup-close" onClick={() => setActiveProject(null)}>
              ✕
            </div>

            {/* ⭐ Left Image with Carousel */}
            <div className="popup-left">
              <img
                src={
                  activeProject.images
                    ? activeProject.images[imageIndex]
                    : activeProject.w_img
                }
                alt={activeProject.w_name}
              />

              {activeProject.images && activeProject.images.length > 1 && (
                <>
                  <button className="carousel-btn left" onClick={prevImage}>
                    ‹
                  </button>
                  <button className="carousel-btn right" onClick={nextImage}>
                    ›
                  </button>
                </>
              )}
            </div>

            {/* ⭐ Right Content */}
            <div className="popup-right">
              <h2>{activeProject.w_name}</h2>
              <p>{activeProject.description}</p>

              {activeProject.tech && (
                <div className="popup-tech">
                  {activeProject.tech.map((tag, i) => (
                    <span key={i}>{tag}</span>
                  ))}
                </div>
              )}

              <div className="popup-links">
                {activeProject.url && <a href={activeProject.url}>Live Demo</a>}
                {activeProject.github && (
                  <a href={activeProject.github}>GitHub</a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyWork;
