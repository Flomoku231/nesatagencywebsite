import React from "react";
import "../Styles/ComponentStyles/_BlogCard.scss";
import PropType from "prop-types";

const BlogCard = ({ ImageUrl, Date, Title, Description, DateIcon }) => {
  return (
    <div className="BlogCard__Container">
      <div className="BlogCard__Content">
        <img src={ImageUrl} id="BlogImage" alt="" />
        <span className="BlogCard__date">
          <img src={DateIcon} id="date--image" alt="" />
          <h3 id="date--text">{Date}</h3>
        </span>
        <span className="BlogCard__text">
          <h1 id="text--head">{Title}</h1>
          <p id="text--description">
            {Description.substring(0, 280)}<span id='ReadMore'>..Read More</span>
            
          </p>
        </span>
      </div>
    </div>
  );
};
BlogCard.propType = {
  ImageUrl: PropType.string,
  DateIcon: PropType.string,
  Date: PropType.oneOfType[(PropType.string, PropType.number)],
  Title: PropType.string,
  Description: PropType.string,
};
export default BlogCard;
