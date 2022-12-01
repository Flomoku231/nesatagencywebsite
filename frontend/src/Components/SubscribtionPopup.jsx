import React from "react";
import "../Styles/ComponentStyles/_SubscribtionPopup.scss";
import ClickButton from "./ClickButton";

const SubscribtionPopup = ({ message, buttonText }) => {
  return (
    <main className="SubscribtionPopup_container">
      <div className="SubscribtionPopup_content">
        <h3>Thanks for subscribing to our News letter</h3>
        <ClickButton
          buttonSizes={"medium--sizes"}
          buttonStyles={"secondary--styles"}
        />
      </div>
    </main>
  );
};

export default SubscribtionPopup;
