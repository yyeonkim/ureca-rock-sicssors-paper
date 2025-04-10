import React from "react";
import questionMark from "../assets/questionmark.png";
import styles from "../css/Card.module.css";
import { choiceImgs } from "../utils/constant.js";

function Card({ choice, isComputer, result }) {
  const cardStyle = {
    backgroundColor: isComputer ? "rgba(202, 102, 31, .2)" : "rgba(36, 125, 193, .2)",
  };
  const className = styles.card + (isComputer ? " computer-card" : "") + (result === "졌다" ? " lose-card" : "");

  return (
    <div className={className} style={result ? cardStyle : undefined}>
      <h1>{isComputer ? "상대선수" : "너님"}</h1>
      <img src={choice ? choiceImgs[choice] : questionMark} alt={choice ? choice : "미정"} />
      <p>{result ? result : "선택하세요"}</p>
    </div>
  );
}

export default Card;
