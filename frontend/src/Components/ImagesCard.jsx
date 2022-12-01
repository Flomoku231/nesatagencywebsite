import React from "react";
import LeftImage from "../Assets/Images/Protocol4.JPG";
import "../Styles/ComponentStyles/_ImagesCard.scss";
import firstRightImg from "../Assets/Images/Protocol5.JPG";
import secondRightImg from "../Assets/Images/Protocol5.JPG";

const ImagesCard = () => {
  return (
    <div className="ImagesCard__Container">
      <div className="left--image">
        <img id="leftImage" src={LeftImage} alt="" />
      </div>
      <div className="right--image">
        <img id="firstRight--image" src={firstRightImg} alt="" />
        <img id="secondRight--image" src={secondRightImg} alt="" />
      </div>
    </div>
  );
};

export default ImagesCard;
