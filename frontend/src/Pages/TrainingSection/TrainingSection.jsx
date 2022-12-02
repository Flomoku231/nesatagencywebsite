import React from "react";
import "../../Styles/PagesStyles/TrainingSectionStyles/_TrainingSection.scss";
import IntroSlider from "../LandingPage/IntroSlider";
import Rotate from "react-reveal/Rotate";
import NavBar from "../../Components/NavBar";
import Footer from "../LandingPage/Footer";
import NewsLetter from "../../Components/NewsLetter";

const TrainingSection = () => {
  return (
    <main className="TrainingSection__Container">
      <NavBar />
      <IntroSlider
        HeadText="Executive Training Section"
        Quote="At NESAT Agency, We Train and Employ"
        className="TrainingSection__Intro"
      />
      <div className="Training__information">
        <div className="Training__information--text">
          <Rotate bottom left>
            <h2 id="TextContent--BoldText">NESAT Agency Training</h2>
            <p id="TextContent--Paragraph">
              We focused on training and capacity building for our clients
              across Liberia and it surrounding. We develop world-class training
              programs, which are accessible to all of our current and future
              clients. NESAT Agency return qualified personnel back into the
              workplace and society to positively impact those around them. As
              an institution, we offer a wide range of study fields, all of
              which are strictly developed and measured to international
              standards, remaining relevant to our clients. We custom design our
              training programs to suit specific requirements and our client’s
              calendars. <br /> <br />
              NESAT Agency training is delivered by professional and highly
              qualified specialists, all of whom have extensive experience in
              their respective areas of expertise. We integrate information
              technology concepts into all our training methodologies and most
              of our content is delivered electronically. We also organize and
              facilitate workshops, conferences and training for government and
              non-governmental organizations.
            </p>
            <h2 id="TextContent--BoldText">We Offered the Following Courses</h2>
            <ul className="Courses__Offered">
              <li>Human Resource Management </li>
              <li>Labor Law with emphasis on Human Resource Management </li>
              <li>Entrepreneurship </li>
              <li>Finance </li>
              <li>Information System Mangt. & Information Technology </li>
              <li>Professional Development </li>
              <li>Marketing Management </li>
              <li>Customers Care Management </li>
            </ul>
          </Rotate>
        </div>
        <div className="TrainingSubscription">
          <Rotate bottom right>
            <h2 id="TextContent--BoldText">
              Our Training Admission is Open in January, May & September{" "}
            </h2>
            <p id="TextContent--Paragraph">
              Subscribe Now to Receive Notification When Admission is open
            </p>
          </Rotate>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default TrainingSection;
