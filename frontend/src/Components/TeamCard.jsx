import React from "react";
import "../Styles/ComponentStyles/_TeamCard.scss";
import PropType from "prop-types";
import { Link } from "react-router-dom";

const TeamCard = ({ ImageUrl, Name, Position }) => {
  return (
    <>
      <Link id="TeamMember__id" to="/TeamMembersDetails">
        <div className="TeamCard__Container">
          <img id="TeamCard__image" src={ImageUrl} alt="" />
          <h1 id="TeamCard__Name">{Name}</h1>
          <h3 id="TeamCard__Position">{Position}</h3>
        </div>
      </Link>
    </>
  );
};
TeamCard.propType = {
  ImageUrl: PropType.string,
  Name: PropType.string,
  Position: PropType.string,
};
export default TeamCard;
