import React from "react";
import "../../Styles/PagesStyles/OurServicesPage/_OurServicesCard.scss";
import PropType from "prop-types";

const OurServicesCard = ({
  ServiceTitle,
  ServicesDesctiption,
}) => {
  return (
    <div className="OurServicesCard__Container">
      <div className="OurServicesCard__Text">
        <h2 id="TextContent--head">{ServiceTitle}</h2>
        <p id="TextContent--Paragraph">{ServicesDesctiption}</p>
      </div>
    </div>
  );
};
OurServicesCard.propType = {
  HeaderImage: PropType.string,
  ServiceTitle: PropType.string,
  ServicesDesctiption: PropType.string,
};
export default OurServicesCard;
