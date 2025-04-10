import { useState } from "react";
import Button from "./components/Button.jsx";
import Card from "./components/Card.jsx";
import styles from "./css/App.module.css";
import { choices, results } from "./utils/constant.js";

function App() {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState([null, null]); // [사용자, 컴퓨터]

  const play = (type) => {
    const com = generateComputerChoice();
    setUserChoice(type);
    setComputerChoice(com);
    setResult(determineWinner(type, com));
  };

  const generateComputerChoice = () => {
    const index = Math.floor(Math.random() * 3);
    return Object.values(choices)[index];
  };

  const determineWinner = (user, com) => {
    switch (user) {
      case choices.PAPER:
        if (com === choices.PAPER) return [results.DRAW, results.DRAW];
        if (com === choices.ROCK) return [results.WIN, results.LOSE];
        if (com === choices.SICSSORS) return [results.LOSE, results.WIN];
        break;
      case choices.SICSSORS:
        if (com === choices.PAPER) return [results.WIN, results.LOSE];
        if (com === choices.ROCK) return [results.LOSE, results.WIN];
        if (com === choices.SICSSORS) return [results.DRAW, results.DRAW];
        break;
      // ROCK
      default:
        if (com === choices.PAPER) return [results.LOSE, results.WIN];
        if (com === choices.ROCK) return [results.DRAW, results.DRAW];
        if (com === choices.SICSSORS) return [results.WIN, results.LOSE];
    }
  };

  const init = () => {
    setUserChoice(null);
    setComputerChoice(null);
    setResult([null, null]);
  };

  return (
    <>
      <header>
        <h1>가위바위보 게임</h1>
      </header>

      <main className={styles.mw}>
        <Card choice={userChoice} result={result[0]} />
        <section className={styles.buttons}>
          <div>
            <Button
              choice={choices.SICSSORS}
              disabled={userChoice}
              onClick={() => {
                play(choices.SICSSORS);
              }}
            />
            <Button
              choice={choices.ROCK}
              disabled={userChoice}
              onClick={() => {
                play(choices.ROCK);
              }}
            />
            <Button
              choice={choices.PAPER}
              disabled={userChoice}
              onClick={() => {
                play(choices.PAPER);
              }}
            />
          </div>
          {/* 결과 */}
          <p className={styles.result}>{result[0] ? result[0] : "?"}</p>
          {/* 다시하기 버튼: 플레이 후에만 표시 */}
          {userChoice && (
            <button type="button" onClick={init}>
              다시하기
            </button>
          )}
        </section>
        <Card isComputer choice={computerChoice} result={result[1]} />
      </main>

      <footer>
        <p>
          버튼을 클릭하여 가위, 바위, 보 중 하나를 선택하세요.
          <br />
          컴퓨터는 랜덤으로 선택합니다.
        </p>
      </footer>
    </>
  );
}

export default App;
