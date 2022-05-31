import React, { useState } from "react";

const Palindrome = () => {
  const [userInput, setUserInput] = useState("");
  const [palindrome, setPalindrome] = useState("");

  const clickHandler = (input) => {
    let forwards = input;
    let backwards = input;
    backwards = backwards.split("");
    backwards = backwards.reverse();
    backwards = backwards.join("");
    if (forwards === backwards) {
      setPalindrome("True");
    } else {
      setPalindrome("False");
    }
  };

  return (
    <div className="puzzleBox filterStringPB">
      <h4>Palindrome</h4>
      <input
        className="inputLine"
        type="text"
        onChange={(e) => setUserInput(e.target.value)}
      />
      <button
        className="confirmationButton"
        onClick={() => clickHandler(userInput)}
      >
        Check
      </button>
      <span className="resultsBox"> Palindrome: {palindrome} </span>
    </div>
  );
};

export default Palindrome;
