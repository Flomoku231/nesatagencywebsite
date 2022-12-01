import React from "react";
import "../../Styles/PagesStyles/LandingPageStyles/_Footer.scss";
import NesatLogo from "../../Assets/Logos/NESAT logo.png";
import FacebookIcon from "../../Assets/Icons/FacebookIcon.svg";
import InstagramIcon from "../../Assets/Icons/InstagramIcon.svg";
import OfficeLocationIcon from "../../Assets/Icons/LocationIcon.svg";
import EmailIcon from "../../Assets/Icons/EmailIcon.svg";
import WhatsappNumberIcon from "../../Assets/Icons/WhatsAppIcon.svg";
import PhoneNumberIcon from "../../Assets/Icons/ContactIcon.svg";
import OficeHourIcon from "../../Assets/Icons/Clock.svg";
import NewsLetter from "../../Components/NewsLetter";

const Footer = () => {
  return (
    <main className="Footer__Container">
      <div className="Sub_popup"></div>
      <section className="Footer__left-section">
        <div className="left--1">
          <img id="Footer--logo" src={NesatLogo} alt="" />
          <span>
            <p id="left1--paragraph">
              Our adherence to National code of ethics and professional practice
              guidelines is ensured.NESAT Agency is perfectly positioned to
              serve the growing demand for global leadership in our world of
              technology and endless change.
            </p>
          </span>
          <div className="left--Icons">
            <img src={FacebookIcon} alt="" />
            <img src={InstagramIcon} alt="" />
          </div>
        </div>
        <div className="left--2">
          <h1>Our Services</h1>
          <ul className="Footer--services">
            <li>
              <a id='Services_' href="/Services/jobRecruitment">Job Recruitment</a>
            </li>
            <li>
              <a id='Services_' href="/Services/Consultancy">Consultancy</a>
            </li>
            <li>
              <a id='Services_' href="/Services/Training">Training</a>
            </li>
          </ul>
        </div>
        {/* Right Section */}

        <div className="right__section--1">
          <h1>Contact Info</h1>
          <ul className="Footer--ContactInfo">
            <li>
              <img src={OfficeLocationIcon} alt="" />{" "}
              <p>72nd Road, SKD Blvd. Liberia </p>
            </li>
            <li>
              <img src={PhoneNumberIcon} alt="" /> <p>+231880981114 |+231776190725</p>
            </li>
            <li>
              <img src={WhatsappNumberIcon} alt="" /> <p>+231880306009</p>
            </li>
            <li>
              <img src={EmailIcon} alt="" /> <p>nesatagency2023@gmail.com</p>
            </li>
            <li>
              <img src={OficeHourIcon} alt="" />{" "}
              <p>Office Hours: 8AM - 11PM-Monday-Friday</p>
            </li>
          </ul>
        </div>
      </section>
      <div className="NewsLetter">
        <NewsLetter />
        <p id="CopyRight">©2022 NESAT AGENCY. All Right Reserved</p>
      </div>
    </main>
  );
};

export default Footer;
