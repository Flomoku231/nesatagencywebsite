import React from "react";
import "../../Styles/PagesStyles/OurTeamDetails/_TeamDetailsCard.scss";
import PropType from "prop-types";


const TeamDetailsCard = ({
  MemberImage,
  Position,
  MemberName,
  EmailAddress,
  PhoneNumber,
  FacebookName,
  InstagramName,
  MemberProfile,
}) => {
  return (
    <div className="TeamDetailsCard__Container">
      <div className="TeamDetailsCard--Image">
        <img id="TeamMemberImage" src={MemberImage} alt="" />
      </div>
      <div className="TeamDetailsCard--Text">
        <h2 id='TextContent--head'>{Position}</h2>
        <h1 id='TextContent--BoldText'>{MemberName}</h1>
        <p id='TextContent--Paragraph'>{MemberProfile}</p>
      <ul className="MembersSocial__Handles">
        <li>
          <p>{EmailAddress}</p>
        </li>
        <li>
          <p>{PhoneNumber}</p>
        </li>
      </ul>
    </div>
    </div>
    
  );
};
TeamDetailsCard.propType = {
  MemberImage: PropType.string.isRequired,
  Position: PropType.string.isRequired,
  MemberName: PropType.string.isRequired,
  EmailAddress: PropType.oneOfType[(PropType.string, PropType.number)],
  PhoneNumber: PropType.string.isRequired,
  FacebookName: PropType.string,
  InstagramName: PropType.string,
  MemberProfile: PropType.string.isRequired,
};
export default TeamDetailsCard;
