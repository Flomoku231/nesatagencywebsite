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
          ServicesDesctiption="We work closely with Employers across all industry sectors to ensure that their internal sed Human Resource systems processes align to their business requirements idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth. Take a 360-degree view of yours situations using our seds deep experience, industries specialization and global reach.
          Human Resource systems processes align to their business requirements idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth. Take a 360-degree view of yours situatio We work closely with Employers across all industry sectors to ensure that their internal sed Human Resource systems processes align to their business requirements idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth. Take a 360-degree view of yours situations using our seds deep experience, industries specialization and global reach.
          Human Resource systems processes align to their business requirements idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth. Take a 360-degree view of yours situatio"
        />
      </div>
      <Footer />
    </main>
  );
};

export default JobRecruitment;
