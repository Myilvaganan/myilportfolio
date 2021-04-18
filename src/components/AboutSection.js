import React from "react";
import about from "../images/about.jpeg";

const AboutSection = () => {
  return (
    <div className="ImageSection">
      <div className="img">
        <img src={about} alt="" />
        <button className="btn resume">
          <a
            href="../images/resume/MYILVAGANAN.pdf"
            download="Myilvaganan Resume"
          >
            Download Cv
          </a>
        </button>
      </div>

      <div className="about-info">
        <h4>
          I am <span> Myilvaganan</span>
        </h4>
        <p className="about-text">
          I don’t like to define myself by the work I’ve done. I define myself
          by the work I want to do. Skills can be taught, personality is
          inherent. I prefer to keep learning, continue challenging myself, and
          do interesting things that matter.
        </p>
        <div className="about-details">
          <div className="left-section">
            <p>Full Name</p>
            <p>Age & D.O.B</p>
            <p>Nationality</p>
            <p>Languages</p>
            <p>Address</p>
            <p>Across</p>
          </div>
          <div className="right-section">
            <p>: Myilvaganan Sakthivel</p>
            <p>: 24, Nov 4 1996</p>
            <p>: Indian</p>
            <p>: Tamil, English, Hindi</p>
            <p>: Karuppur, Salem, Tamil Nadu</p>
            <p>: Chennai, Sanand, Pune, Noida, Hungary</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
