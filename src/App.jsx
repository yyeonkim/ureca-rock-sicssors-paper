function App() {
  return (
    <>
      <header>
        <h1>가위바위보 게임</h1>
      </header>
      <main className="mw">
        <div>
          <h1>너님</h1>
          <img src="" alt="" />
          <p>선택하세요(결과)</p>
        </div>
        <section>
          <div>버튼들</div>
          <p>결과</p>
          <button>다시하기</button>
        </section>
        <div>컴퓨터 카드</div>
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
