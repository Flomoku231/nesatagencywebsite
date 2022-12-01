import React from "react";
import "../../Styles/PagesStyles/LandingPageStyles/_OurPartners.scss";
import Partner1 from "../../Assets/Logos/JobLog1.png";
import Partner2 from "../../Assets/Logos/JobLogo2.png";
import Partner3 from "../../Assets/Logos/JobLogo3.png";
import Partner4 from "../../Assets/Logos/JobLogo4.png";
import Partner5 from "../../Assets/Logos/JobLogo5.png";

const OurPartners = () => {
  return (
    <main className="OurPartners__Container">
      <div className="OurPartners__Content">
        <h1 id="TextContent--BoldText">Our Partners: </h1>
        <div className="Partners__Image">
          <div className="Partner--row1">
            <img id="PartnerLogo" src={Partner1} alt="" />
            <img id="PartnerLogo" src={Partner2} alt="" />
          </div>
          <div className="Partner--row2">
            <img id="PartnerLogo" src={Partner3} alt="" />
            <img id="PartnerLogo" src={Partner4} alt="" />
          </div>
          <div className="Partner--row3">
            <img id="PartnerLogo" src={Partner5} alt="" />
            <img id="PartnerLogo" src={Partner3} alt="" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default OurPartners;
