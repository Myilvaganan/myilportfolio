import React from 'react';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import SkillsSection from '../components/SkillsSection';
import Title from '../components/Title';
import design from '../images/design.svg';
import intelligence from '../images/intelligence.svg';
import { motion } from 'framer-motion';
import { routeFade } from '../utils/animation';

const AboutPage = () => {
  return (
    <motion.div
      className='AboutPage'
      variants={routeFade}
      initial='initial'
      animate='animate'
    >
      <Title title={`About Me`} span={`About Me`} />
      <AboutSection />
      <Title title={`Software Skills`} span={`Software Skills`} />
      <div className='skillsContainer'>
        <SkillsSection skill={'VS Code Editor'} progress={'90%'} />
        <SkillsSection skill={'Adobe XD'} progress={'85%'} />
        <SkillsSection skill={'Adobe PhotoShop'} progress={'89%'} />
        <SkillsSection skill={'Adobe Illustrator'} progress={'85%'} />
        <SkillsSection skill={'Figma'} progress={'90%'} />
        <SkillsSection skill={'Canvas'} progress={'95%'} />
        <SkillsSection skill={'ABB ShopFloor Editor'} progress={'89%'} />
        <SkillsSection skill={'b+m Program Software'} progress={'85%'} />
      </div>
      <Title title={'Services'} span={'Services'} />
      <div className='services-container'>
        <ServicesSection
          image={intelligence}
          title={'Full Stack Program - Guvi Geek Network Pvt. Ltd.'}
          text={
            'Gained knowledge and skills on web development with MERN  Technologies (MongoDB, Express Js, React Js, Node Js)'
          }
          text2={'January 2021 - April 2021'}
          experienceDetails={
            'Implemented knowledge in completing full stack projects with user experience and better designs.'
          }
        />
        <ServicesSection
          image={design}
          title={'Engineer - MothersonSumi INfotech and Designs Limited, Noida'}
          text={
            'Experienced for 2.5+ years in robotics field of automation as a programmer for articulated robots '
          }
          text2={'August 2018 - January 2021'}
          experienceDetails={
            'In-depth knowledge of JavaScript, CSS, HTML, and front-end languages, Experience with user interface design and Good project management skills with excellent troubleshooting knowledge'
          }
        />
      </div>
    </motion.div>
  );
};

export default AboutPage;
