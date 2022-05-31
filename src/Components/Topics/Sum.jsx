import React, { useState } from "react";

const Sum = () => {
  const [number1, setNumber1] = useState("0");
  const [number2, setNumber2] = useState("0");
  const [sum, setSum] = useState(null);

  const add = (num1, num2) => {
    let result = +num1 + +num2;
    setSum(result);
  };

  return (
    <div className="puzzleBox sumPB">
      <h4>Sum</h4>
      <input
        className="inputLine"
        type="number"
        onChange={(e) => setNumber1(e.target.value)}
      />
      <input
        className="inputLine"
        type="number"
        onChange={(e) => setNumber2(e.target.value)}
      />
      <button
        className="confirmationButton"
        onClick={() => add(number1, number2)}
      >
        Add
      </button>
      <span className="resultsBox">Total: {sum}</span>
    </div>
  );
};

export default Sum;
