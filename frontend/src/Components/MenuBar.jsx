import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/ComponentStyles/_MenuBar.scss";
import AngleDropDown from "../Assets/Icons/AngleDropIcon.svg";

const MenuBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const ShowMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="MenuBar__Container">
      <ul className="MenuBar__list">
        <Link id="HomeMenu" to="/">
          <li>Home</li>
        </Link>
        <Link id="AboutUsMenu" to="/AboutUs">
          <li>About Us</li>
        </Link>
        <Link id="ServicesMenu" to="" onClick={ShowMenu}>
          <li>
            Services <img id="AngleDropID" src={AngleDropDown} alt="" />
          </li>
        </Link>
        {/* Services SubMenu */}
        <ul className={`HideMenuList ${showMenu ? "ShowMenuList" : ""}`}>
          <Link id="JobRecruitmentSub" to="/Services/jobRecruitment">
            <li>Job Recruitment</li>
          </Link>
          <Link id="JobRecruitmentSub" to="/Services/Consultancy">
            <li>Consultancy</li>
          </Link>
          {/* <Link id="JobRecruitmentSub" to="/Services">
            <li>Training</li>
          </Link> */}
        </ul>
        {/* End of Services SubMenu */}
        <Link id="ContactUsMenu" to="/ContactUs">
          <li>Contact Us</li>
        </Link>
        <Link id="BlogPostMenu" to="/Blog/Post">
          <li>News</li>
        </Link>
        <Link id="TrainingMenu" to="/Services/Training">
          <li>Training</li>
        </Link>
      </ul>
    </div>
  );
};

export default MenuBar;
