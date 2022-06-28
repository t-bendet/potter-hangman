import React, { useEffect, useReducer } from "react";

const MAX_STRIKES = 2;

const GamePlayContext = React.createContext({
  secretWord: "",
});

const removeSpecialCharacters = (str) => str.replace(/[^a-zA-Z0-9 ]/g, "");
const removeSpaces = (str) => str.replace(/\s/g, "");

const initializeState = () => ({
  secretWord: removeSpecialCharacters("harry potter"),
  matchedLetters: [],
  strikes: 0,
  secretWordSet: new Set([...removeSpaces("harry potter")]),
});

const initialGameStatus = {
  secretWord: "",
  matchedLetters: [],
  strikes: 0,
};

const clickReducer = (state, action) => {
  if (action.type === "CHAR_MATCH") {
    return {
      ...state,
      matchedLetters: [...state.matchedLetters, action.value],
    };
  }
  if (action.type === "CHAR_MISS") {
    return {
      ...state,
      strikes: state.strikes + 1,
    };
  }
  return state;
};

// ? should secret word be an array and not a string from the start? or array of objects with id's?
export const GamePlayContextProvider = (props) => {
  const [gameState, dispatchClick] = useReducer(
    clickReducer,
    initialGameStatus,
    initializeState
  );
  useEffect(() => {
    if (gameState.strikes > MAX_STRIKES) {
      console.log("YOU LOSERRRRRRRRRRRRRRRRRR");
    }
    const isWholePhraseMatched = [...gameState.secretWordSet].every((char) =>
      gameState.matchedLetters.includes(char)
    );
    if (isWholePhraseMatched && gameState.matchedLetters.length) {
      console.log("yhahhahahahahha");
    }
  }, [gameState]);
  const updateGameProgress = (tileChar) => {
    if (gameState.secretWordSet.has(tileChar)) {
      dispatchClick({
        type: "CHAR_MATCH",
        value: tileChar,
      });
    } else {
      dispatchClick({
        type: "CHAR_MISS",
      });
    }
  };
  return (
    <GamePlayContext.Provider
      value={{
        secretWord: gameState.secretWord,
        matchedLetters: gameState.matchedLetters,
        strikes: gameState.strikes,
        secretWordSet: gameState.secretWordSet,
        updateGameProgress,
      }}
    >
      {props.children}
    </GamePlayContext.Provider>
  );
};

export default GamePlayContext;

// if (newStrikes > MAX_STRIKES) {
// }
// return newStrikes;

// const isWholePhraseMatched = [...secretWordSet].every((char) =>
// gameState.matchedLetters.includes(char)
// );
// if (isWholePhraseMatched) {
// console.log("yhahhahahahahha");
// }
