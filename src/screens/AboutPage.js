import React from "react";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import SkillsSection from "../components/SkillsSection";
import Title from "../components/Title";
import design from "../images/design.svg";
import intelligence from "../images/intelligence.svg";
import gameDev from "../images/gameDev.svg";



const AboutPage = () => {
  return (
    <div className="AboutPage">
      <Title title={`About Me`} span={`About Me`} />
      <AboutSection />
      <Title title={`Software Skills`} span={`Software Skills`} />
      <div className="skillsContainer">
        <SkillsSection skill={"Adobe XD"} progress={"85%"} />
        <SkillsSection skill={"Adobe PhotoShop"} progress={"89%"} />
        <SkillsSection skill={"Figma"} progress={"90%"} />
        <SkillsSection skill={"Adobe Illustrator"} progress={"85%"} />
        <SkillsSection skill={"Canvas"} progress={"95%"} />
        <SkillsSection skill={"ABB ShopFloor Editor"} progress={"89%"} />
        <SkillsSection skill={"b+m Program Software"} progress={"85%"} />
        <SkillsSection skill={"Microsoft Word"} progress={"90%"} />
        <SkillsSection skill={"Microsoft Excel"} progress={"70%"} />
        <SkillsSection skill={"Microsoft PPT"} progress={"85%"} />
      </div>
      <Title title={"Services"} span={"Services"} />
      <div className="services-container">
        <ServicesSection
          image={design}
          title={"Engineer - MothersonSumi INfotech and Designs Limited, Noida"}
          text={
            "Experienced 2.5+ years in robotics field of automation as a programmer for articulated robots like ABB IRB 5400, 5500, 580 series and b+m robot."
          }
        />
        <ServicesSection
          image={intelligence}
          text={
            "Designing Flyers and Posters for the Glitz and Glitterati International Modelling Company using Over, Canvas, Adobe Illustrator Softwares"
          }
        />
        
      </div>
    </div>
  );
};

export default AboutPage;
