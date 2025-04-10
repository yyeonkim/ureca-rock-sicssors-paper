import React from "react";
import questionMark from "../assets/questionmark.png";
import styles from "../css/Card.module.css";

function Card() {
  return (
    <div className={styles.card}>
      <h1>너님</h1>
      <img src={questionMark} alt="" />
      <p>선택하세요</p>
    </div>
  );
}

export default Card;
