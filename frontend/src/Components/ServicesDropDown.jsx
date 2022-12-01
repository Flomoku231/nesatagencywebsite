import React from "react";
import "../Styles/ComponentStyles/_ServicesDropDown.scss";
import JobRecruitmentImg from "../Assets/Icons/BusinessRecruitment.svg";
import ConsultancyImg from "../Assets/Icons/ConsultancyIcon.svg";
import TrainingImg from "../Assets/Icons/TrainingIcon.svg";
import { Link } from "react-router-dom";

const ServicesDropDown = () => {
  return (
    <div className="ServicesDropDown__Container">
      <ul className="ServicesList">
        <Link id="JobRecruitmentRoute" to="/Services/jobRecruitment">
          <li>
            <img id="ServicesImage" src={JobRecruitmentImg} alt="" />
            Job Recruitment
          </li>
        </Link>
        <Link id="JobRecruitmentRoute" to="/Services/Consultancy">
        <li>
          <img id="ServicesImage" src={ConsultancyImg} alt="" />
          Consultancy
        </li>
        </Link>
        <Link id="JobRecruitmentRoute" to='/Services/Training'>
        <li>
          <img id="ServicesImage" src={TrainingImg} alt="" />
          Training
        </li>
        </Link>
      </ul>
    </div>
  );
};

export default ServicesDropDown;
