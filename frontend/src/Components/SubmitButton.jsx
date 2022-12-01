import React from "react";
import PropTypes from "prop-types";
import "../Styles/ComponentStyles/_SubmitButton.scss";

const Styles = ["primary-styles", "secondary-styles"];
const Size = ["large-size", "medium-size", "small-size"];

const SubmitButton = ({ id, name, ButtonStyles, ButtonSize, onClick }) => {
  const CheckButtonStyles = Styles.includes(ButtonStyles)
    ? ButtonStyles
    : Styles[0];

  const CheckButtonSize = Size.includes(ButtonSize) ? ButtonSize : Size[0];

  return (
    <button
      onClick={onClick}
      type="submit"
      className={`button ${CheckButtonStyles} ${CheckButtonSize}`}
      id={id}
    >
      {name}
    </button>
  );
};
SubmitButton.propTypes = {
  onClick: PropTypes.func,
  id: PropTypes.string,
  ButtonSize: PropTypes.string,
  ButtonStyles: PropTypes.string,
  name: PropTypes.string.isRequired,
};
export default SubmitButton;
