import React from "react";
import scissors from "../assets/scissors.png";
import styles from "../css/Button.module.css";

function Button() {
  return (
    <button type="button" className={styles.button}>
      <img src={scissors} alt="가위" />
      <span>가위</span>
    </button>
  );
}

export default Button;
