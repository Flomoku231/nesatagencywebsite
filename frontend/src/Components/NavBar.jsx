import React from "react";
import "../Styles/ComponentStyles/_NavBar.scss";
import NesatLogo from "../Assets/Logos/NESAT logo.png";
import MenuBarImage from "../Assets/Icons/Menubar.svg";
import CancelImage from "../Assets/Icons/CancelIcons.svg";
import ClickButton from "./ClickButton";
import { Link } from "react-router-dom";
import ServicesDropDown from "./ServicesDropDown";
import { useState } from "react";
import MenuBar from "./MenuBar";

const NavBar = () => {
  const [DropDown, setDropDown] = useState(false);
  const [ShowMenuBar, setShowMenuBar] = useState(false);

  const ShowDropDown = () => {
    setDropDown(!DropDown);
  };
  const HideDropDown = () => {
    setDropDown(!DropDown);
  };
  // Menu Bar State
  const DisplayMenu = () => {
    setShowMenuBar(!ShowMenuBar);
  };

  // useEffect(() => {
  //   document.addEventListener("mouseenter", () => {
  //     setShowMenuBar(false);
  //   });
  // });
  return (
    <div className="NavBar__Container">
      <div className="Navbar__CompanyName">
        <Link id="LogoRoute" to="/">
          {" "}
          <img id="Navar__logo" src={NesatLogo} alt="" />
        </Link>
        <h2 id="CompanyName__text">
          National Executive Search & Training Agency
        </h2>
      </div>

      <ul className="NavBar__list">
        <Link id="HomeRoute" to="/">
          <li>Home</li>
        </Link>
        <Link id="AboutUsRoute" to="/AboutUs">
          <li>About Us</li>
        </Link>
        <Link
          id="ServicesRoute"
          to=""
          onMouseEnter={ShowDropDown}
          onMouseLeave={HideDropDown}
        >
          <li>Services</li>
          {DropDown ? (
            <div className="trye">
              <ServicesDropDown onMouseEnter={ShowDropDown} />{" "}
            </div>
          ) : null}
        </Link>
        <Link id="ContactUsRoute" to="/ContactUs">
          <li>Contact Us</li>
        </Link>
        <a id="BlogPostRoute" href="/Blog/Post">
          <li>News</li>
        </a>
        {/* <Link id="TrainingRoute" to="/Services/Training">
          <li>Training</li>
        </Link> */}
        <Link id="FindJobsRoute" to="/FindJobs">
          <li>
            <ClickButton
              name="Find Job"
              buttonStyles="primary--styles"
              buttonSizes="medium--sizes"
            />
          </li>
        </Link>
        <li className="MenuBarDisplay">
          <button className="MenuButton" onClick={DisplayMenu}>
            {ShowMenuBar ? (
              <img id="MenuImage" src={CancelImage} alt="" />
            ) : (
              <img id="MenuImage" src={MenuBarImage} alt="" />
            )}
          </button>

          {ShowMenuBar ? <MenuBar /> : ""}
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
