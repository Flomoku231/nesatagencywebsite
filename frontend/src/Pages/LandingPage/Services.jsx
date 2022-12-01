import React from "react";
import "../../Styles/PagesStyles/LandingPageStyles/_Services.scss";
import ServicesCard from "../../Components/ServicesCard";
import Recruitment from "../../Assets/Icons/BusinessRecruitment.svg";
import TrainingIcon from "../../Assets/Icons/TrainingIcon.svg";
import ConsultancyIcon from "../../Assets/Icons/ConsultancyIcon.svg";

const Services = () => {
  return (
    <div className="Services__Container">
      <ServicesCard
        routeTo="/Services/jobRecruitment"
        imageUrl={Recruitment}
        HeaderText="Job Recruitment"
        Paragraph="NESAT Agency is perfectly positioned to serve the growing demand 
        for global leadership in our world of technology and endless change. By 
        listing, examine and understanding our client’s strategy and culture, 
        we are able to identify fit-for–purpose leaders for your Senior Management "
      />
      <ServicesCard
        routeTo="/Services/Consultancy"
        imageUrl={ConsultancyIcon}
        HeaderText="Consultancy"
        Paragraph="Board and CEOs are dealing with challengesof globalization, audit, 
        risk management, human resource compliance, regulatory 
        serenity and shareholders activism.  Companies are seeking Leaders to drive transformation and success with the true strength in strategy and multicultural sensitivity "
      />
      <ServicesCard
        routeTo="/Services/Training"
        imageUrl={TrainingIcon}
        HeaderText="Training"
        Paragraph="
        We focused on training and capacity building for our clients across Liberia 
        and it surrounding. We develop world-class 
        training programs, which are accessible to all of our current and future clients.NESAT Agency return qualified personnel back into the workplace and society to positively impact those around them. "
      />
    </div>
  );
};

export default Services;
