import React from "react";
import "../../Styles/PagesStyles/LandingPageStyles/_LandingPage.scss";
import NavBar from "../../Components/NavBar";
import LandingPageIntro from "./LandingPageIntro";
import Services from "./Services";
import LandingPageAbout from "./LandingPageAbout";
import LandingPageTeam from "./LandingPageTeam";
import Testimonial from "./Testimonial";
import LandingPageBlog from "./LandingPageBlog";
import Footer from "./Footer";
import OurPartners from "./OurPartners";

const LandingPage = () => {
  return (
    <main className="LandingPage__Container">
      <NavBar />
      <LandingPageIntro />
      <Services />
      <LandingPageAbout />
      <LandingPageTeam />
      <Testimonial />
      <OurPartners />
      <LandingPageBlog />
      <Footer />
    </main>
  );
};

export default LandingPage;
