import React from "react";
import "../../Styles/PagesStyles/OurTeamDetails/_OurTeamDetails.scss";
import NavBar from "../../Components/NavBar";
import IntroSlider from "../LandingPage/IntroSlider";
import CEOImage from "../../Assets/Images/Protocol4.JPG";
import TeamDetailsCard from "./TeamDetailsCard";
import Footer from "../LandingPage/Footer";

const OurTeamDetails = () => {
  return (
    <main className="OurTeamDetails__Container">
      <NavBar />
      <IntroSlider
        HeadText="Our Team Members"
        Quote="Hard Work, Integrity & Delivery of Quality Services"
        className="OurTeamIntro__Container"
      />
      <TeamDetailsCard
        MemberImage={CEOImage}
        Position="Chief Executive Officer"
        MemberName="Mr. Eric S. Doupah, SR."
        EmailAddress="eric@gmail.com"
        PhoneNumber={"+231880609009 / 250080167356"}
        FacebookName="Eric S. Doupah, SR."
        InstagramName="Eric S. Doupah, SR."
        MemberProfile="Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive"
      />

      <TeamDetailsCard
        MemberImage={CEOImage}
        Position="Chief Executive Officer"
        MemberName="Mr. Eric S. Doupah, SR."
        EmailAddress="eric@gmail.com"
        PhoneNumber={"+231880609009 / 250080167356"}
        FacebookName="Eric S. Doupah, SR."
        InstagramName="Eric S. Doupah, SR."
        MemberProfile="Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive"
      />
      <TeamDetailsCard
        MemberImage={CEOImage}
        Position="Chief Executive Officer"
        MemberName="Mr. Eric S. Doupah, SR."
        EmailAddress="eric@gmail.com"
        PhoneNumber={"+231880609009 / 250080167356"}
        FacebookName="Eric S. Doupah, SR."
        InstagramName="Eric S. Doupah, SR."
        MemberProfile="Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive"
      />
      <TeamDetailsCard
        MemberImage={CEOImage}
        Position="Chief Executive Officer"
        MemberName="Mr. Eric S. Doupah, SR."
        EmailAddress="eric@gmail.com"
        PhoneNumber={"+231880609009 / 250080167356"}
        FacebookName="Eric S. Doupah, SR."
        InstagramName="Eric S. Doupah, SR."
        MemberProfile="Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive"
      />
      <Footer />
    </main>
  );
};

export default OurTeamDetails;
