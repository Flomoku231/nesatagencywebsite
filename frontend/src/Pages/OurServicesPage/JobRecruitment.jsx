import React from "react";
import "../../Styles/PagesStyles/OurServicesPage/_jobRecruitment.scss";
import NavBar from "../../Components/NavBar";
import IntroSlider from "../LandingPage/IntroSlider";
import OurServicesCard from "./OurServicesCard";
import Footer from "../LandingPage/Footer";

const JobRecruitment = () => {
  return (
    <main className="jobRecruitment__Container">
      <NavBar />
      <IntroSlider
        HeadText="Job Recruitment"
        Quote="We Believed in Prayers, HardWork & Dedication"
        className="jobRecruitment__Intro"
      />
      <div className="jobRecruitment__Card">
        <OurServicesCard
          ServiceTitle="Job Recruitment"
          ServicesDesctiption="NESAT Agency is perfectly positioned to serve the growing demand for 
          global leadership in our world of technology and endless change. By listing, examine and understanding our client’s strategy and culture, we are able to identify fit-for–purpose leaders for your Senior Management Board, Middle Level Mangers, Team players and across functional areas always with an eye for diversity.  We help find the best talent, build 
          a successful team and guarantee value for shareholders through excellence in executive search."
        />
      </div>
      <Footer />
    </main>
  );
};

export default JobRecruitment;
