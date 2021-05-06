import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import Typed from "react-typed";
import { motion } from 'framer-motion';
import { routeFade } from '../utils/animation';


const HomePage = () => {
  return (
    <div className="HomePage">
      <motion.header className="intro" variants={routeFade} initial='initial' animate='animate'>
        <h1 className="intro-text">
          Hi! I'm{" "}
          <span className="typed">
            <Typed
              className="typed-text"
              strings={[
                "Myilvaganan",
                "a Farmer",
                "a Web Developer",
                "Myilvaganan",
                "a React Js Developer",
                "a Node Js Developer",
                "Myilvaganan",
                "a MERN Developer",
                "a Nature Lover!",
              ]}
              typeSpeed={90}
              backSpeed={60}
              loop
            />
          </span>
        </h1>
        <p className="intro-text-para">
          Full-stack development/ front-end development position emphasizing
          strong web UI (react.js, node.js, express.js, JavaScript, html5,
          css3,etc.) And general full-stack development skills including Restful
          API's and databases. Bring to the team a solid track record of success
          in the delivery of software applications, hands-on experience, and
          diverse industry background. Equally strong in the front-end web UI,
          middle-tier, and back-end technologies.
        </p>
        <div className="icons">
          <a
            href="https://www.linkedin.com/in/myilvaganan/"
            className="icon-holder"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon className="icon fb" icon={faLinkedin} />
          </a>
          <a
            href="https://github.com/Myilvaganan"
            className="icon-holder"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon className="icon gh" icon={faGithub} />
          </a>
          <a
            href="https://www.instagram.com/myil_passion_photographer/?igshid=18ql4igyq5cm1"
            className="icon-holder"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon className="icon ig" icon={faInstagram} />
          </a>
        </div>
      </motion.header>
    </div>
  );
};

export default HomePage;
