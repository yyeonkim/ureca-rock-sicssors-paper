import React from "react";
import styles from "../css/Button.module.css";
import { choice } from "./Card.jsx";

function Button({ type, className }) {
  return (
    <button type="button" className={`${styles.button} ${className}`}>
      <img src={choice[type].src} alt={choice[type].caption} />
      <span>{choice[type].caption}</span>
    </button>
  );
}

export default Button;
