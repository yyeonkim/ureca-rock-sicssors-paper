import React from "react";
import styles from "../css/Button.module.css";
import { choiceImgs } from "../utils/constant.js";

const btnStyle = {
  cursor: "not-allowed",
};

function Button({ choice, className, onClick, disabled }) {
  return (
    <button
      style={disabled ? btnStyle : undefined}
      type="button"
      className={`${styles.button} ${className}`}
      disabled={disabled}
      onClick={onClick}
    >
      <img src={choiceImgs[choice]} alt={choice} />
      <span>{choice}</span>
    </button>
  );
}

export default Button;
