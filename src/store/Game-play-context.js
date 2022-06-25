import React, { useState } from "react";

const MAX_STRIKES = 2;

const GamePlayContext = React.createContext({
  secretWord: "",
});

// TODO add animation
// ! consider letter casing,snake casing or any other casing in the original word,secret word should be trimmed,consider special charecters inside a word ('....)
// ? should secret word be an array and not a string from the start? or array of objects with id's?
// TODO turn GamePlayContextProvider state into a reducer
export const GamePlayContextProvider = (props) => {
  const [secretWord, setSecretWord] = useState("harry potter");
  const [matchedLetters, setMatchedLetters] = useState([]);
  const [strikes, setStrikes] = useState(0);
  const secretWordSet = new Set([...secretWord.replace(/\s/g, "")]);
  const updateGameProgress = (tileChar) => {
    if (secretWordSet.has(tileChar)) {
      setMatchedLetters((prev) => {
        const newMatchedLetters = [...prev, tileChar];
        const isWholePhraseMatched = [...secretWordSet].every((char) =>
          newMatchedLetters.includes(char)
        );
        console.log(isWholePhraseMatched);
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
