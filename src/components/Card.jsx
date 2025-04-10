import React from "react";
import questionMark from "../assets/questionmark.png";
import styles from "../css/Card.module.css";
import { choiceImgs, results } from "../utils/constant.js";

function Card({ choice, type = "user", result }) {
  const className = `${styles.card} ${type === "computer" && styles.computer} ${
    result === results.LOSE && styles.lose
  }  ${result === results.WIN && styles.win}`;

  return (
    <div className={className}>
      <h1>{type === "computer" ? "상대선수" : "너님"}</h1>
      <img src={choice ? choiceImgs[choice] : questionMark} alt={choice ? choice : "미정"} />
      <p>{result ? result : "선택하세요"}</p>
    </div>
  );
}

export default Card;
