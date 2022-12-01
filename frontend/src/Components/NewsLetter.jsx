import React, { useState } from "react";
import axios from "axios";
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
    if (email) {
      axios
        .post("http://localhost:7000/api/newsletter/form", subscriber)
        .then((res) => res.subscriber);
    } else {
      alert();
    }
  };
  return (
    <div className="NewsLetter__Container">
      <form action="" className="NewsLetterSubscription">
        <input
          type="email"
          name="email"
          value={subscriber.email}
          id="newsLetter__input"
          placeholder="Enter email"
          onChange={handleChange}
          required
        />
        <SubmitButton
          onClick={subscriptionDone}
          name="Subscribe Now"
          ButtonSize="small--sizes"
          ButtonStyles="primary--styles"
          id="Subsribe__Button"
        />
      </form>
    </div>
  );
};

export default NewsLetter;
