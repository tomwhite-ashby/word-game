import React from "react";

export function GuessForm({ addGuess, disabled }) {
  const [guess, setGuess] = React.useState("");

  const registerGuess = () => {
    console.log("Guess:", guess);
    addGuess(guess);
    setGuess("");
  };

  return (
    <div>
      <form
        className="guess-input-wrapper"
        onSubmit={(e) => {
          e.preventDefault();
          registerGuess();
        }}
      >
        <label htmlFor="guess-input">Enter Guess:</label>
        <input
          id="guess-input"
          type="text"
          disabled={disabled}
          value={guess}
          onChange={(e) => setGuess(e.target.value.toUpperCase())}
          pattern="\w{5}"
          maxLength={5}
        />
      </form>
    </div>
  );
}

export default GuessForm;
