import React from "react";
import IntroSlider from "../LandingPage/IntroSlider";
import "../../Styles/PagesStyles/AboutUsStyles/_AboutUs.scss";
import Footer from "../LandingPage/Footer";
import Zoom from "react-reveal/Zoom";
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
              established in 2021 specializes in two main segments. The real
              value of our business is based on the fact that we are the true
              brand ambassadors in the job market on behalf of our clients and
              we are selective about who we represent. We are adept at assessing
              potential candidate suitability against the job specification in
              terms of skills, capability and experience. We strengthen
              organization leadership through headhunting fit for purpose
              leaders for our clients and developing human resource excellence
              and potential through training.
            </p>
          </Zoom>
        </div>
      </div>

      <div className="Details__Choose">
        <div className="Choose--text">
          <Zoom right>
            <h2 id="TextContent--BoldText">WHY CHOOSE US?</h2>
            <p id="TextContent--Paragraph">
              <ul className="TextContent__List">
                <li>
                  We help Organizations with efficient and effective recruitment
                  process. We help in securing top talent with comprehensive and
                  transparent process to ensure a perfect fit-for-purpose
                  candidate for the job.{" "}
                </li>
                <li>
                  We help HR meet up with timeline in searching the ideal
                  candidate suited for the job with a trusted and reliable
                  process.{" "}
                </li>
                <li>
                  {" "}
                  We help HR find the best talent, build a successful team and
                  guarantee value for shareholders through excellence employment
                  services.{" "}
                </li>
                <li>
                  By listing, examine and understanding our client’s strategy
                  and culture, we are able to identify fit-for-purpose leaders
                  across functional areas always with an eye for diversity.{" "}
                </li>
                <li>
                  {" "}
                  We help our clients find the best passive candidate; the best
                  performing people are passive and they are not looking for a
                  new role. They are highly valued and rewarded employees within
                  their current organizations who would rather not see them
                  leave.{" "}
                </li>
                <li>
                  We perform a thorough background check. Trim down the burden
                  on HR receiving multiple applications for one position, at
                  time duplicated applications as a result of applicant
                  inaccuracy.{" "}
                </li>
                <li>
                  We help in securing Experienced Personnel. Bring new idea on
                  board and minimize the cost of training new employees without
                  professional experience.{" "}
                </li>
                <li>
                  We provide Labor Law training to HR staff to enhance decision
                  making with regards to the work force management and dealing
                  with disciplinary issues and dismissals.{" "}
                </li>
              </ul>
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
