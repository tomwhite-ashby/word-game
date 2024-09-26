import React from "react";

const LETTERS = ["QWERTYUIOP", "ASDFGHJKL", "ZXCVBNM"];

function Keyboard({ guesses }) {
  const classes = {};
  guesses.forEach((guess) => {
    guess.forEach(({ letter, status }) => {
      if (!classes[letter]) {
        classes[letter] = status;
      } else if (classes[letter] === "incorrect" && status === "misplaced") {
        classes[letter] = "misplaced";
      } else if (classes[letter] === "misplaced" && status === "correct") {
        classes[letter] = "correct";
      }
    });
  });

  return (
    <div className="keyboard">
      {LETTERS.map((row, i) => (
        <div key={i} className="keyboard-row">
          {row.split("").map((letter, j) => (
            <span key={j} className={`keyboard-key ${classes[letter]}`}>
              {letter}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Keyboard;
