import React from "react";
import paperImg from "../assets/paper.png";
import questionMark from "../assets/questionmark.png";
import rockImg from "../assets/rock.png";
import sicssorsImg from "../assets/scissors.png";
import styles from "../css/Card.module.css";

const choice = {
  ROCK: { src: rockImg, alt: "주먹" },
  SICSSORS: { src: sicssorsImg, alt: "가위" },
  PAPAER: { src: paperImg, alt: "보" },
};

function Card({ type }) {
  return (
    <div className={styles.card}>
      <h1>너님</h1>
      <img src={type ? choice[type].src : questionMark} alt={type ? choice[type].alt : "미정"} />
      <p>선택하세요</p>
    </div>
  );
}

export default Card;
