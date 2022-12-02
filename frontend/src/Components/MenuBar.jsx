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
          <a id="JobRecruitmentSub" href="/Services/jobRecruitment">
            <li>Job Recruitment</li>
          </a>
          <a id="JobRecruitmentSub" href="/Services/Consultancy">
            <li>Consultancy</li>
          </a>
          {/* <a id="JobRecruitmentSub" href="/Services">
            <li>Training</li>
          </a> */}
        </ul>
        {/* End of Services SubMenu */}
        <a id="ContactUsMenu" href="/ContactUs">
          <li>Contact Us</li>
        </a>
        <a id="BlogPostMenu" href="/Blog/Post">
          <li>News</li>
        </a>
        <a id="TrainingMenu" href="/Services/Training">
          <li>Training</li>
        </a>
      </ul>
    </div>
  );
};

export default MenuBar;
