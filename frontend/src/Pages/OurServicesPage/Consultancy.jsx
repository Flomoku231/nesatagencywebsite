import React from "react";
import "../../Styles/PagesStyles/OurServicesPage/_Consultancy.scss";
import NavBar from "../../Components/NavBar";
import IntroSlider from "../LandingPage/IntroSlider";
import OurServicesCard from "./OurServicesCard";
import Footer from "../LandingPage/Footer";

const Consultancy = () => {
  return (
    <main className="Consultancy__Container">
      <NavBar />
      <IntroSlider
        HeadText="Consultancy"
        Quote="We Provide The Best Consultancy For Your Business"
        className="Consultancy__Intro"
      />
      <div className="Consultancy__Card">
        <OurServicesCard
          ServiceTitle="Consultancy"
          ServicesDesctiption="Board and CEOs are dealing with challengesof globalization, audit, risk management, human resource compliance, regulatory serenity and shareholders activism.  Companies are seeking Leaders to drive transformation and success with the true strength in strategy and multicultural sensitivity and the charisma to motivate their employees.  Leadership assessment 
        is a core service at NESAT Agency. As such, we provide consultancy in the following: "
        />
        <ul className="Consultancy__List">
          <li id="TextContent--Paragraph">
            {" "}
            Payrollvalidation for our clients{" "}
          </li>
          <li id="TextContent--Paragraph">
            {" "}
            Prepare, review, and update Job description to match your company
            strategy{" "}
          </li>
          <li id="TextContent--Paragraph">
            {" "}
            Provide guidance for Human Resource Audit preparation for our
            clients{" "}
          </li>
          <li id="TextContent--Paragraph">
            {" "}
            Prepare world class resume for our clients{" "}
          </li>
          <li id="TextContent--Paragraph">
            {" "}
            Facilitate your training and workshops{" "}
          </li>
        </ul>
      </div>
      <Footer />
    </main>
  );
};

export default Consultancy;
