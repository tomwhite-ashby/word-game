import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import Guesses from "../Guesses";
import { GuessForm } from "../GuessForm";
import Keyboard from "../Keyboard";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";

// Pick a random word on every pageload.
// To make debugging easier, we'll log the solution in the console.

const STATES = {
  WON: "won",
  LOST: "lost",
  PLAYING: "playing",
};

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [answer, setAnswer] = React.useState(sample(WORDS));
  console.info({ answer });

  const [state, setState] = React.useState(STATES.PLAYING);

  const addGuess = (guess) => {
    const nextGuesses = [...guesses];
    nextGuesses.push(checkGuess(guess, answer));
    setGuesses(nextGuesses);
    if (guess === answer) {
      setState(STATES.WON);
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setState(STATES.LOST);
    }
  };

  const newGame = () => {
    setAnswer(sample(WORDS));
    setState(STATES.PLAYING);
    setGuesses([]);
  };

  return (
    <>
      {state === STATES.WON && (
        <div class="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in{" "}
            <strong>
              {guesses.length} guess{guesses.length > 1 ? "es" : ""}
            </strong>
            .
            <br />
            <button className="newGame" onClick={newGame}>
              New Game
            </button>
          </p>
        </div>
      )}
      {state === STATES.LOST && (
        <div class="sad banner">
          <p>
            Sorry, the correct answer is <strong>LEARN</strong>.
          </p>
          <br />
          <button className="newGame" onClick={newGame}>
            New Game
          </button>
        </div>
      )}

      <Guesses guesses={guesses} />
      <GuessForm addGuess={addGuess} disabled={state !== STATES.PLAYING} />
      <Keyboard guesses={guesses} />
    </>
  );
}

export default Game;
