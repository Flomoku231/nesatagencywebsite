import React, { useState } from "react";
import axios from "../axiosInstance/axios.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import Validation from "../Validation/Validation.js";
import "../Styles/ComponentStyles/_NewsLetter.scss";
import SubmitButton from "./SubmitButton";

const NewsLetter = () => {
  const [subscriber, setSubscriber] = useState({
    email: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSubscriber({
      ...subscriber,
      [name]: value,
    });
  };
  const subscriptionDone = () => {
    const { email } = subscriber;
    if (
      /^([a-zA-Z0-9_])+@(([a-zA-Z0-9])+\.)+([a-zA-Z0-9]{2,4})+$/i.test(email)
    ) {
      axios
        .post("/api/newsletter/form", subscriber)
        .then((res) => res.subscriber);
      toast.success("Subscription Successful", {
        position: toast.POSITION.BOTTOM_LEFT,
      });
    } else if (
      !/^([a-zA-Z0-9_])+@(([a-zA-Z0-9])+\.)+([a-zA-Z0-9]{2,4})+$/i.test(email)
    ) {
      toast.error("Please enter a valid email", {
        position: toast.POSITION.BOTTOM_LEFT,
      });
    } else {
      toast.error("Please input email", {
        position: toast.POSITION.BOTTOM_LEFT,
      });
    }
  };

  // Trying Validation
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubscriber({
      email: "",
    });
  };
  return (
    <div className="NewsLetter__Container">
      <form
        action=""
        className="NewsLetterSubscription"
        onSubmit={handleSubmit}
      >
        <input
          type="email"
          name="email"
          value={subscriber.email}
          id="newsLetter__input"
          placeholder="Enter email"
          onChange={handleChange}
        />
        <SubmitButton
          onClick={subscriptionDone}
          name="Subscribe Now"
          ButtonSize="small--sizes"
          ButtonStyles="primary--styles"
          id="Subsribe__Button"
        />
      </form>
      <ToastContainer />
    </div>
  );
};

export default NewsLetter;
