import React, { useState } from "react";

const MAX_STRIKES = 2;

const GamePlayContext = React.createContext({
  secretWord: "",
});
// ! consider letter casing,snake casing or any other casing in the original word,secret word should be trimmed
// ! consider special charecters inside a word ('....)
export const GamePlayContextProvider = (props) => {
  const [secretWord, setSecretWord] = useState("harry");
  const [matchedLetters, setMatchedLetters] = useState([]);
  const [strikes, setStrikes] = useState(0);
  const secretWordSet = new Set([...secretWord]);
  const checkChar = (tileChar) => {
    if (secretWordSet.has(tileChar)) {
      setMatchedLetters((prev) => {
        const newMatchedLetters = [...prev, tileChar];
        const isGameWon = [...secretWordSet].every((char) =>
          newMatchedLetters.includes(char)
        );
        if (isGameWon) {
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
        checkChar,
      }}
    >
      {props.children}
    </GamePlayContext.Provider>
  );
};

export default GamePlayContext;
