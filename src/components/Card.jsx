import React from "react";
import questionMark from "../assets/questionmark.png";
import styles from "../css/Card.module.css";
import { choiceImgs, results } from "../utils/constant.js";

function Card({ choice, isComputer, result }) {
  return (
    <div className={`${styles.card} ${isComputer && styles.computer} ${result === results.LOSE && styles.lose}`}>
      <h1>{isComputer ? "상대선수" : "너님"}</h1>
      <img src={choice ? choiceImgs[choice] : questionMark} alt={choice ? choice : "미정"} />
      <p>{result ? result : "선택하세요"}</p>
    </div>
  );
}

export default Card;
