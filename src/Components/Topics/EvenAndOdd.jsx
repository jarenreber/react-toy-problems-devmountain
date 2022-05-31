import React, { useState } from "react";

const EvenAndOdd = () => {
  const [evenArr, setEvenArr] = useState([]);
  const [oddArr, setOddArr] = useState([]);
  const [userInput, setUserInput] = useState("");

  const evensOrOddsHandler = () => {
    console.log("stuff");
    let odds = [];
    let evens = [];
    let str = userInput.split(",");
    for (let i = 0; i < str.length; i++) {
      if (+str[i] % 2 === 0) {
        evens.push(+str[i]);
      } else {
        odds.push(+str[i]);
      }
    }
    setEvenArr(evens);
    setOddArr(odds);
  };

  return (
    <div className="puzzleBox evenAndOddPB">
      <h4>Evens and Odds</h4>
      <input
        onChange={(e) => setUserInput(e.target.value)}
        className="inputLine"
      />
      <button className="confirmationButton" onClick={evensOrOddsHandler}>
        Split
      </button>
      <span className="resultsBox">Evens: {JSON.stringify(evenArr)}</span>
      <span className="resultsBox">Odds: {JSON.stringify(oddArr)}</span>
    </div>
  );
};

export default EvenAndOdd;
