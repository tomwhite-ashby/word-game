import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function Guesses({ guesses }) {
  const rows = range(0, NUM_OF_GUESSES_ALLOWED);
  const cols = range(0, 5);

  return (
    <div className="guess-results">
      {rows.map((i) => (
        <p className="guess" key={i}>
          {guesses[i]
            ? guesses[i].map((guess, j) => (
                <span className={`cell ${guess.status}`} key={j}>
                  {guess.letter}
                </span>
              ))
            : [...cols].map((j) => <span className="cell" key={j}></span>)}
        </p>
      ))}
    </div>
  );
}

export default Guesses;
