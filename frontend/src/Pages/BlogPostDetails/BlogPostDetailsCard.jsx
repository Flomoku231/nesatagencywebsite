import React from "react";
import Fade from "react-reveal/Fade";
import "../../Styles/PagesStyles/BlogPostDetails/_BlogPostDetailsCard.scss";
import PropType from "prop-types";

const BlogPostDetailsCard = ({
  PostDate,
  PostTitle,
  PostImage,
  PostDetails,
  FirstPicture,
  SecondPicture,
  ThirdPicture,
}) => {
  return (
    <div className="BlogPostDetailsCard__Container">
      <p id="TextContent--BoldText">{PostDate}</p>
      <h1 id="TextContent--HeadText">{PostTitle}</h1>
      <Fade left>
        <img id="PostImageID" src={PostImage} alt="" />
      </Fade>
      <Fade bottom>
      <p id="TextContent--Paragraph">{PostDetails}</p>
      </Fade>

      <div className="DetailsImage__Gallery">
        <Fade right big>
          <img id="GalleryID" src={FirstPicture} alt="" />
          <img id="GalleryID" src={SecondPicture} alt="" />
          <img id="GalleryID" src={ThirdPicture} alt="" />
        </Fade>
      </div>
    </div>
  );
};
BlogPostDetailsCard.propType = {
  PostDate: PropType.string,
  PostTitle: PropType.string,
  PostImage: PropType.string,
  PostDetails: PropType.string,
  FirstPicture: PropType.string,
  SecondPicture: PropType.string,
  ThirdPicture: PropType.string,
};
export default BlogPostDetailsCard;
