import React, { useState } from "react";
import "../../Styles/PagesStyles/ContactUsStyles/_ContactUs.scss";
import Fade from 'react-reveal/Fade';
import axios from "axios";
import SubmitButton from "../../Components/SubmitButton";
import NavBar from "../../Components/NavBar";
import IntroSlider from "../LandingPage/IntroSlider";
import Footer from "../LandingPage/Footer";

const ContactUs = () => {
  const [contactUs, setContactUs] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactUs({
      ...contactUs,
      [name]: value,
    });
  };
  const contactUsSuccess = () => {
    const { name, email, message } = contactUs;
    if ((name, email, message)) {
      axios
        .post("http://localhost:7000/api/contactUs/form", contactUs)
        .then((res) => res.contactUs);
    } else {
      alert("Fill in the inputy");
    }
  };
  return (
    <main className="ContactUs__Container">
      <NavBar />
      <IntroSlider
        HeadText={"Contact Us"}
        Quote={"We are Available 24/7. Just Send Us Message"}
        className="ContactUsClass"
      />
      <div className="ContactUs__Content">
      <Fade right>
        <form action="" className="ContactUsForm">
          <div className="ContactFormHead">
            <h1>Send Us Message</h1>
          </div>
          <div className="NameInput">
            <label id="nameLabel" htmlFor="Name">
              Full Name
            </label>
            <input
              name="name"
              value={contactUs.name}
              id="Name"
              type="text"
              onChange={handleChange}
              placeholder="Enter Name"
              required
            />
          </div>
          <div className="EmailInput">
            <label id="emailLabel" htmlFor="Email">
              Email
            </label>
            <input
              name="email"
              value={contactUs.email}
              id="Email"
              onChange={handleChange}
              type="email"
              placeholder="Enter Email"
              required
            />
          </div>
          <div className="MessageInput">
            <label id="messageLabel" htmlFor="MessageID">
              Message
            </label>
            <textarea
              name="message"
              value={contactUs.message}
              onChange={handleChange}
              id="MessageID"
              cols="30"
              rows="10"
              placeholder="Enter Message"
              required
            ></textarea>
          </div>
          <SubmitButton
            onClick={contactUsSuccess}
            name="Submit"
            ButtonSize="large-size"
            ButtonStyles="secondary-styles"
            id="Contact--btn"
          />
        </form>
        </Fade>
      </div>

      <Footer />
    </main>
  );
};

export default ContactUs;
