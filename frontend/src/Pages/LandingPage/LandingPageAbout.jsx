import React from "react";
import Zoom from "react-reveal/Zoom";
import ClickButton from "../../Components/ClickButton";
import "../../Styles/PagesStyles/LandingPageStyles/_LandingPageAbout.scss";
import { Link } from "react-router-dom";

const LandingPageAbout = () => {
  return (
    <main className="LandingPageAbout__Container">
      <div className="LandingPageAbout__TextContent">
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
            potential candidates suitability against the job specification in
            terms of skills, capability and experience.
          </p>
          <Link id="AboutUsRoute" to="/AboutUs">
            <Link to="/AboutUs">
              {" "}
              <ClickButton
                name="Discover More"
                buttonSizes="large--sizes"
                buttonStyles="primary--styles"
              />
            </Link>
          </Link>
        </Zoom>
      </div>
    </main>
  );
};

export default LandingPageAbout;
