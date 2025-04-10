import React from "react";
import styles from "../css/Button.module.css";
import { choiceImgs, choices } from "../utils/constant.js";

const classNames = {
  [choices.PAPER]: "paper",
  [choices.ROCK]: "rock",
  [choices.SCISSORS]: "scissors",
};

function Button({ choice, onClick, disabled }) {
  const className = classNames[choice];

  return (
    <button
      type="button"
      className={`${styles.button} ${styles[className]} ${disabled && styles.disabled}`}
      disabled={disabled}
      onClick={onClick}
    >
      <img src={choiceImgs[choice]} alt={choice} />
      <span>{choice}</span>
    </button>
  );
}

export default Button;
