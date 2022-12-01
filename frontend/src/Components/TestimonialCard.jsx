import React from "react";
import PropType from "prop-types";
import '../Styles/ComponentStyles/_TestimonialCard.scss'

const TestimonialCard = ({ ImageUrl, ParagraphText, Name, Position }) => {
  return (
    <div className="TestimonialCard__Container">
      <div className="TestimonialCard__Content">
        <img id="TestimonialCard__Content-image" src={ImageUrl} alt="" />
        <span className="TestimonialCard__Content-text">
          <p id="ParagraphText">{ParagraphText}</p>
          <h1 id="NameText">{Name}</h1>
          <h2 id="PositionText">{Position}</h2>
        </span>
      </div>
    </div>
  );
};
TestimonialCard.propType = {
  ImageUrl: PropType.string,
  ParagraphText: PropType.string,
  Name: PropType.string,
  Position: PropType.string,
};
export default TestimonialCard;
