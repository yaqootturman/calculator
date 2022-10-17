import react, { useState } from "react";
import Result from "./Components/Result";
import './Components/style.css'

const App = () => {
  const [statement, setStatement] = useState([]);
  const [clicked, setClicked] = useState(false);
  const [result, setResult] = useState(0);

  return (
    <div class="cal-body">
      <input class="result-area" disabled value={result} onChange={() => {}}></input>
      <div class="numbers-area">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "+", "-"].map((ele, index) => {
        return (
          <button
            class="number"
            key={index}
            onClick={(e) => {
              setStatement([...statement, e.target.innerText]);
            }}
          >
            {ele}
          </button>
        );
      })}
      </div>
      <button
        class="equal-sign"
        onClick={() => {
          setClicked(!clicked);
        }}
      >
        =
      </button>
      <button
        class="reset"
        onClick={(e) => {
          setResult(0);
          setStatement([]);
        }}
      >
        C
      </button>
      {clicked ? (
        <Result
          statement={statement}
          setResult={setResult}
          setStatement={setStatement}
        />
      ) : null}
    </div>
  );
};

export default App;
