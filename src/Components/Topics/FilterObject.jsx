import React, { useState } from "react";

const FilterObject = () => {
  const [userInput, setUserInput] = useState("");
  const [filteredArray, setFilteredArray] = useState([]);
  const [unFilteredArray, setUnfilteredArray] = useState([
    { name: "Jaren", title: "Hacker", age: 23 },
    { name: "Jose", title: "The Best", hairColor: "black" },
    { name: "Sam", title: "Web Developer", isCool: true },
  ]);

  const clickHandler = () => {
    let results = [];
    unFilteredArray.map((person) => {
      person.hasOwnProperty(userInput) && results.push(person);
    });
    setFilteredArray(results);
  };

  return (
    <div className="puzzleBox filterObjectPB">
      <h4>FilterObject</h4>
      <span className="puzzleText">{JSON.stringify(unFilteredArray)}</span>
      <input
        type="text"
        className="inputLine"
        onChange={(e) => setUserInput(e.target.value)}
      />
      <button className="confirmationButton" onClick={clickHandler}>
        Filter
      </button>
      <span className="resultsBox filterObjectRB">
        {JSON.stringify(filteredArray)}
      </span>
    </div>
  );
};

export default FilterObject;
