import Button from "./components/Button.jsx";
import Card from "./components/Card.jsx";
import styles from "./css/App.module.css";

const types = { ROCK: "ROCK", SICSSORS: "SICSSORS", PAPER: "PAPAER" };

function App() {
  return (
    <>
      <header>
        <h1>가위바위보 게임</h1>
      </header>

      <main className={styles.mw}>
        <Card />
        <section className={styles.buttons}>
          <div>
            <Button className="sicssors-btn" type={types.SICSSORS} />
            <Button className="rock-btn" type={types.ROCK} />
            <Button className="paper-btn" type={types.PAPER} />
          </div>
          <p className={styles.result}>?</p>
          <button type="button">다시하기</button>
        </section>
        <Card isComputer />
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
