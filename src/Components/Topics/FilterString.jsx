import React, { useState } from "react";

const FilterString = () => {
  const [userInput, setUserInput] = useState("");
  const [filteredArray, setFilteredArray] = useState([]);
  const [unFilteredArray, setUnfilteredArray] = useState([
    "The quick brown fox jumped over the lazy dog.",
    "It's a trap!",
    "Take apart the pieces you left.",
    "Gardenia",
  ]);

  const onClickHandler = () => {
    let result = [];
    unFilteredArray.map((string) => {
      string.includes(userInput) && result.push(string);
    });
    setFilteredArray(result);
  };

  return (
    <div className="puzzleBox filterStringPB">
      <h4>FilterString</h4>
      <span className="puzzleText">{JSON.stringify(unFilteredArray)}</span>
      <input
        className="inputLine"
        type="text"
        onChange={(e) => setUserInput(e.target.value)}
      />
      <button className="confirmationButton" onClick={onClickHandler}>
        Filter
      </button>
      <span className="resultsBox filterStringRB">
        {JSON.stringify(filteredArray)}
      </span>
    </div>
  );
};

export default FilterString;
