import React from "react";
import paperImg from "../assets/paper.png";
import questionMark from "../assets/questionmark.png";
import rockImg from "../assets/rock.png";
import sicssorsImg from "../assets/scissors.png";
import styles from "../css/Card.module.css";

export const choice = {
  ROCK: { src: rockImg, caption: "주먹" },
  SICSSORS: { src: sicssorsImg, caption: "가위" },
  PAPER: { src: paperImg, caption: "보" },
};

function Card({ type, isComputer, result }) {
  return (
    <div className={styles.card + (isComputer ? " computer-card" : "")}>
      <h1>너님</h1>
      <img src={type ? choice[type].src : questionMark} alt={type ? choice[type].caption : "미정"} />
      <p>{result ? result : "선택하세요"}</p>
    </div>
  );
}

export default Card;
