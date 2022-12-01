import React from "react";
import Zoom from "react-reveal/Zoom";
import PropType from "prop-types";
import "../../Styles/PagesStyles/LandingPageStyles/_IntroSlider.scss";
import ClickButton from "../../Components/ClickButton";
import { Link } from "react-router-dom";

const IntroSlider = ({ className, HeadText, Quote }) => {
  return (
    <div className={className}>
      <Zoom top>
        <div className="IntroSlider__Content">
          <h3 id="Content__Head">{HeadText}</h3>
          <h1 id="Content__Bold">{Quote}</h1>
          <Link to="/FindJobs">
            <ClickButton
              name="Find Jobs"
              buttonSizes="large--sizes"
              buttonStyles="primary--styles"
            />
          </Link>
        </div>
      </Zoom>
    </div>
  );
};
IntroSlider.propType = {
  className: PropType.string,
  HeadText: PropType.string,
  Quote: PropType.string,
};
export default IntroSlider;
