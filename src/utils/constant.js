import paperImg from "../assets/paper.png";
import rockImg from "../assets/rock.png";
import sicssorsImg from "../assets/scissors.png";

const choices = { ROCK: "주먹", SICSSORS: "가위", PAPER: "보" };
const choiceImgs = {
  주먹: rockImg,
  가위: sicssorsImg,
  보: paperImg,
};
const results = {
  WIN: "이겼다",
  LOSE: "졌다",
  DRAW: "비겼다",
};

export { choiceImgs, choices, results };
