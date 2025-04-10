import { useState } from "react";
import Button from "./components/Button.jsx";
import Card from "./components/Card.jsx";
import styles from "./css/App.module.css";

const types = { ROCK: "ROCK", SICSSORS: "SICSSORS", PAPER: "PAPER" };

function App() {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState([null, null]); // 이겼다, 졌다, 비겼다

  const play = (type) => {
    const user = type;
    const com = generateComputerChoice();
    setUserChoice(user);
    setComputerChoice(com);
    setResult(determineWinner(user, com));
  };

  const generateComputerChoice = () => {
    const index = Math.floor(Math.random() * 3);
    return Object.values(types)[index];
  };

  const determineWinner = (user, com) => {
    switch (user) {
      case types.PAPER:
        if (com === types.PAPER) return ["비겼다", "비겼다"];
        if (com === types.ROCK) return ["이겼다", "졌다"];
        if (com === types.SICSSORS) return ["졌다", "이겼다"];
        break;
      case types.SICSSORS:
        if (com === types.PAPER) return ["이겼다", "졌다"];
        if (com === types.ROCK) return ["졌다", "이겼다"];
        if (com === types.SICSSORS) return ["비겼다", "비겼다"];
        break;
      // ROCK
      default:
        if (com === types.PAPER) return ["졌다", "이겼다"];
        if (com === types.ROCK) return ["비겼다", "비겼다"];
        if (com === types.SICSSORS) return ["이겼다", "졌다"];
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
        <Card type={userChoice} result={result[0]} />
        <section className={styles.buttons}>
          <div>
            <Button
              className="sicssors-btn"
              type={types.SICSSORS}
              disabled={userChoice}
              onClick={() => {
                play(types.SICSSORS);
              }}
            />
            <Button
              className="rock-btn"
              type={types.ROCK}
              disabled={userChoice}
              onClick={() => {
                play(types.ROCK);
              }}
            />
            <Button
              className="paper-btn"
              type={types.PAPER}
              disabled={userChoice}
              onClick={() => {
                play(types.PAPER);
              }}
            />
          </div>
          <p className={styles.result}>{result[0] ? result[0] : "?"}</p>
          {userChoice && (
            <button type="button" onClick={init}>
              다시하기
            </button>
          )}
        </section>
        <Card isComputer type={computerChoice} result={result[1]} />
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
