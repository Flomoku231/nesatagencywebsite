import React from "react";
import "../Styles/ComponentStyles/_ServicesCard.scss";
import PropTypes from "prop-types";

const ServicesCard = ({ HeaderText, Paragraph, imageUrl, routeTo }) => {
  return (
    <div className="Card__Container">
      <a id="LandingPageServices__Route" href={routeTo}>
        <div className="ServicesCard__Content">
          <img src={imageUrl} id="ImageID" alt="" />
          <span className="Content__text">
            <h1 id="ServicesCard__Content-header">{HeaderText}</h1>
            <p id="ServicesCard__Content-paragraph">
              {Paragraph.substring(0, 220)}
              <span id="ReadMore">..Read More</span>
            </p>
          </span>
        </div>
      </a>
    </div>
  );
};
ServicesCard.propTypes = {
  HeaderText: PropTypes.string,
  Paragraph: PropTypes.string,
  imageUrl: PropTypes.string,
  routeTo: PropTypes.string,
};
export default ServicesCard;
