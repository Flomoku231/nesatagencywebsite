import React from "react";
import "../Styles/ComponentStyles/_ClickButton.scss";
import PropTypes from "prop-types";

const Styles = ["primary--styles", "secondary--styles"];
const Sizes = ["large--sizes", "medium--sizes", "small--sizes"];
const ClickButton = ({ name, buttonSizes, buttonStyles }) => {
  const CheckStyles = Styles.includes(buttonStyles) ? buttonStyles : Styles[0];
  const CheckSizes = Sizes.includes(buttonSizes) ? buttonSizes : Sizes[0];

  return (
    <button className={`Clickbtn ${CheckStyles} ${CheckSizes}`} type="button">
      {name}
    </button>
  );
};
ClickButton.propTypes = {
  buttonSizes: PropTypes.string,
  buttonStyles: PropTypes.string,
  name: PropTypes.string.isRequired,
};
export default ClickButton;
