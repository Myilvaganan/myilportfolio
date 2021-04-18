import React from 'react';
import ContactSection from "../components/ContactSection";
import phone from "../images/phone.svg";
import email from "../images/emailme.svg";
import location from "../images/location.svg";
import Tittle from "../components/Title";

const ContactPage = () => {
    return (
      <div>
        <Tittle className="title" title={"Contact Me"} span={"Contact Me"} />

        <div className="ContactPage">


          <div className="map-sect">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d62506.83531823401!2d78.05679952736378!3d11.717259516033584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1618026078459!5m2!1sen!2sin"
              width="400"
              height="400"
              style={{border:"0"}}
              allowfullscreen
              loading="lazy"
              title={"CurrentLocation"}
            ></iframe>
          </div>


          <div className="contact-sect">
            <ContactSection
              icon={phone}
              text1={"+91 8925162153"}
              title={"Phone & WhatsApp"}
            />
            <ContactSection
              icon={email}
              email={"myilsmp@gmail.com"}
              title={"Email"}
            />
            <ContactSection
              icon={location}
              text1={"170/4, 4th ward, Thidirpattanam"}
              text2={"Karuppur, Salem- 636012"}
              title={"Tamil Nadu, India"}
            />
          </div>
        </div>
      </div>
    );
}

export default ContactPage
