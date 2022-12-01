import React from "react";
import PropType from "prop-types";
import "../Styles/ComponentStyles/_JobCard.scss";

const JobCard = ({
  JobType,
  JobTypeID,
  CompanyLogo,
  LogoId,
  JobTitle,
  JobDescription,
}) => {
  return (
    <div className="JobCard__Container">
      <div className="JobCard__Content">
        <span className="Job__Types">
          <h3 id={JobTypeID}>{JobType}</h3>
          <img src={CompanyLogo} id={LogoId} alt="" />
        </span>

        <span className="Content--Description">
          <h1 id="Description--headerText">{JobTitle}</h1>
          <p id="Description--paragraph">{JobDescription}</p>
        </span>
      </div>
    </div>
  );
};
JobCard.propType = {
  JobType: PropType.string,
  JobTypeID: PropType.string,
  CompanyLogo: PropType.string,
  LogoId: PropType.string,
  JobTitle: PropType.string,
  JobDescription: PropType.string,
  ApplicantNumbers: PropType.number,
};
export default JobCard;
