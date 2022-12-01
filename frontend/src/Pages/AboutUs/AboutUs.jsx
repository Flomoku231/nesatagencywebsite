import React from "react";
import IntroSlider from "../LandingPage/IntroSlider";
import "../../Styles/PagesStyles/AboutUsStyles/_AboutUs.scss";
import Footer from "../LandingPage/Footer";
import Zoom from 'react-reveal/Zoom';
import NavBar from "../../Components/NavBar";

const AboutUs = () => {
  return (
    <main className="AboutUs__Container">
      <NavBar />
      <IntroSlider
        HeadText="About Us"
        Quote="We strengthen organizations"
        className="AboutUs--background"
      />
      <div className="AboutUs__Details">
      
        <div className="Details__TextContent">
          <Zoom left>
          <h3 id="TextContent--head">About Us</h3>
          <h1 id="TextContent--BoldText">
            Executive and Middle Level Management search in Liberia
          </h1>
          <p id="TextContent--Paragraph">
            National Executive Search and Training Agency is simply about
            finding and attracting the best passive candidate to join your
            business and developing human resource excellence and potential
            through training. NESAT Agency is a Liberian based organization
            established in 2021 specializes in two main segments. The real value
            of our business is based on the fact that we are the true brand
            ambassadors in the job market on behalf of our clients and we are
            selective about who we represent. We are adept at assessing
            potential candidate suitability against the job specification in
            terms of skills, capability and experience.
          </p>
          </Zoom>
        </div>
      </div>

      <div className="Details__Choose">
        <div className="Choose--text">
        <Zoom right>
          <h2 id="TextContent--BoldText">WHY CHOOSE US?</h2>
          <p id="TextContent--Paragraph">
            The real value of our business is based on the fact that we are the
            true brand ambassadors in the job market on behalf of our clients
            and we are selective about who we represent. We are adept at
            assessing potential candidate suitability against the job
            specification in terms of skills, capability and experience. Being a
            unique firm, allow us to remain focused at all times on what we do
            best headhunting and attracting top senior talent and other
            specialized skills for our clients.
          </p>
          </Zoom>
        </div>
      </div>
      <div className="Details__Values">
        <div className="Details__Corevalues">
          <h2 id="TextContent--head">Our Core Values</h2>
          <ul className="Corevalues--List">
            <li>Integrity</li>
            <li>Reliability</li>
            <li>Quality</li>
            <li>Perseverance</li>
            <li>Team Work</li>
          </ul>
        </div>
        <div className="Details__Visions">
          <h2 id="TextContent--head">Our Vision</h2>
          <p id="TextContent--Paragraph">
            Head hunting fit for purpose leaders for our clients and developing
            human resource excellence and potential through training.
          </p>
        </div>
        <div className="Details__Mission">
          <h2 id="TextContent--head">Our Mission</h2>
          <p id="TextContent--Paragraph">
            We enhance professional development of world class leaders to meet
            the need of today’s business in our world of everlasting change. We
            develop lasting client relationship by providing exceptional
            stakeholder value in an environment of trust and respect.{" "}
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default AboutUs;
