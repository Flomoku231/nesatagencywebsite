import React, { useState } from "react";
import "../../Styles/PagesStyles/FindJobFormStyles/_FindJobForm.scss";
import axios from "axios";
import NavBar from "../../Components/NavBar";
import SubmitButton from "../../Components/SubmitButton";
import Footer from "../LandingPage/Footer";
import IntroSlider from "../LandingPage/IntroSlider";

const FindJobForm = () => {
  const [findJob, setFindJob] = useState({
    name: "",
    email: "",
    file: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFindJob({
      ...findJob,
      [name]: value,
    });
  };
  const submitSuccess = () => {
    const { email, name, file } = findJob;
    if ((email, name, file)) {
      axios
        .post("http://localhost:7000/api/findJobs/form", findJob)
        .then((res) => res.findJob);
    } else {
      alert("Invalid Input");
    }
  };
  return (
    <main className="FindJobForm__Container">
      <NavBar />
      <div className="IntroSlides">
        <IntroSlider
          className="FindJob__Slider"
          HeadText="Get Jobs"
          Quote="We Believed in Quality"
        />
      </div>
      <div className="FindJobForm__Content">
        <form action="" className="JobForm">
          <div className="formHead">
            <h1>Fill In The Form</h1>
          </div>
          <div className="NameInput">
            <label id="NameLabel" htmlFor="Name">
              Full Name
            </label>
            <input
              onChange={handleChange}
              name="name"
              value={findJob.name}
              id="Name"
              type="text"
              required
            />
          </div>
          <div className="EmailInput">
            <label id="EmailLabel" htmlFor="Email">
              Email
            </label>
            <input
              onChange={handleChange}
              name="email"
              value={findJob.email}
              id="Email"
              type="email"
              required
            />
          </div>
          <div className="CVInput">
            <label id="CVlabel" htmlFor="CV">
              Upload CV
            </label>
            <input
              onChange={handleChange}
              name="file"
              value={findJob.file}
              required
              type="file"
              id="CV"
              accept=".pdf"
            />
          </div>
          <SubmitButton
            onClick={submitSuccess}
            name="Submit"
            ButtonSize="large-size"
            ButtonStyles="secondary-styles"
            id="SubmitCV--btn"
          />
        </form>
      </div>
      <Footer />
    </main>
  );
};

export default FindJobForm;
