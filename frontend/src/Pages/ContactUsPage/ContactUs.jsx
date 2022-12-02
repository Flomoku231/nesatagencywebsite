import React, { useState } from "react";
import "../../Styles/PagesStyles/ContactUsStyles/_ContactUs.scss";
import Fade from "react-reveal/Fade";
import axios from "../../axiosInstance/axios.js";
import SubmitButton from "../../Components/SubmitButton";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavBar from "../../Components/NavBar";
import IntroSlider from "../LandingPage/IntroSlider";
import Footer from "../LandingPage/Footer";

const ContactUs = () => {
  const [contactUs, setContactUs] = useState({
    name: "",
    email: "",
    Sendermessage: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactUs({
      ...contactUs,
      [name]: value,
    });
  };
  const contactUsSuccess = (e) => {
    const { name, email, Sendermessage } = contactUs;
    if (
      name &&
      /^([a-zA-Z0-9_])+@(([a-zA-Z0-9])+\.)+([a-zA-Z0-9]{2,4})+$/i.test(email) &&
      Sendermessage.length > 20
    ) {
      axios.post("/api/contactUs/form", contactUs).then((res) => res.contactUs);
      toast.success("Thanks for Contacting Us");
    } 
    else if (Sendermessage.length < 20) {
      e.preventDefault();
      toast.warn("Message must be above 20 characters");
    } else {
      e.preventDefault();
      toast.warn("Invalid Input");
    }
  };
  const ContactSubmit = (e) => {
    e.preventDefault();
    setContactUs({
      name: "",
      email: "",
      Sendermessage: "",
    });
  };
  return (
    <main className="ContactUs__Container">
      <NavBar />
      <IntroSlider
        HeadText={"Contact Us"}
        Quote={"We are available 24/7 to serve your Human Resource need"}
        className="ContactUsClass"
      />
      <div className="ContactUs__Content">
        <Fade right>
          <form action="" className="ContactUsForm" onSubmit={ContactSubmit}>
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
              />
            </div>
            <div className="MessageInput">
              <label id="messageLabel" htmlFor="MessageID">
                Message
              </label>
              <textarea
                name="Sendermessage"
                value={contactUs.Sendermessage}
                onChange={handleChange}
                id="MessageID"
                cols="30"
                rows="10"
                placeholder="Enter Message"
              ></textarea>
            </div>
            <SubmitButton
              onClick={contactUsSuccess}
              name="Submit"
              ButtonSize="large-size"
              ButtonStyles="secondary-styles"
              id="Contact--btn"
            />
            {/* <ToastContainer /> */}
          </form>
        </Fade>
      </div>

      <Footer />
    </main>
  );
};

export default ContactUs;
