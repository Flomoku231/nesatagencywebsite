import React from 'react';
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
      Quote="We Believed in Prayers, HardWork & Dedication"
      className="Consultancy__Intro"
    />
    <div className="Consultancy__Card">
      <OurServicesCard
        ServiceTitle="Consultancy"
        ServicesDesctiption="We work closely with Employers across all industry sectors to ensure that their internal sed Human Resource systems processes align to their business requirements idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth. Take a 360-degree view of yours situations using our seds deep experience, industries specialization and global reach.
          Human Resource systems processes align to their business requirements idea of denouncing pleasure and praising pain was born and We work closely with Employers across all industry sectors to ensure that their internal sed Human Resource systems processes align to their business requirements idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth. Take a 360-degree view of yours situations using our seds deep experience, industries specialization and global reach.
          Human Resource systems processes align to their business requirements idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth. Take a 360-degree view of yours situatio I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth. Take a 360-degree view of yours situatio"
      />
    </div>
    <Footer />
  </main>
  )
}

export default Consultancy