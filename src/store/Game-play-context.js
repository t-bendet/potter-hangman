import React, { useState, useEffect } from "react";

const MAX_STRIKES = 2;

const GamePlayContext = React.createContext({
  secretWord: "",
});

const removeSpecialCharacters = (str) => str.replace(/[^a-zA-Z0-9 ]/g, "");
const removeSpaces = (str) => str.replace(/\s/g, "");

// TODO add animation
// ? should secret word be an array and not a string from the start? or array of objects with id's?
// TODO turn GamePlayContextProvider state into a reducer
export const GamePlayContextProvider = (props) => {
  const [secretWord, setSecretWord] = useState("");
  const [matchedLetters, setMatchedLetters] = useState([]);
  const [strikes, setStrikes] = useState(0);
  const secretWordSet = new Set([...removeSpaces(secretWord)]);
  useEffect(() => {
    setSecretWord(removeSpecialCharacters("harry potter"));
  }, []);
  const updateGameProgress = (tileChar) => {
    if (secretWordSet.has(tileChar)) {
      setMatchedLetters((prev) => {
        const newMatchedLetters = [...prev, tileChar];
        const isWholePhraseMatched = [...secretWordSet].every((char) =>
          newMatchedLetters.includes(char)
        );
        if (isWholePhraseMatched) {
          console.log("yhahhahahahahha");
        }
        return newMatchedLetters;
      });
      // * some kind of counter?,animation? who knows...
    } else {
      setStrikes((prev) => {
        const newStrikes = prev + 1;
        if (newStrikes > MAX_STRIKES) {
          console.log("YOU LOSERRRRRRRRRRRRRRRRRR");
        }
        return newStrikes;
      });
      // * animation
    }
  };
  return (
    <GamePlayContext.Provider
      value={{
        secretWord,
        matchedLetters,
        strikes,
        secretWordSet,
        updateGameProgress,
      }}
    >
      {props.children}
    </GamePlayContext.Provider>
  );
};

export default GamePlayContext;
