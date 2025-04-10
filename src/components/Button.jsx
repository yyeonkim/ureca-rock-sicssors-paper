import React from "react";
import styles from "../css/Button.module.css";
import { choice } from "./Card.jsx";

const btnStyle = {
  cursor: "not-allowed",
};

function Button({ type, className, onClick, disabled }) {
  return (
    <button
      style={disabled ? btnStyle : undefined}
      type="button"
      className={`${styles.button} ${className}`}
      disabled={disabled}
      onClick={onClick}
    >
      <img src={choice[type].src} alt={choice[type].caption} />
      <span>{choice[type].caption}</span>
    </button>
  );
}

export default Button;
