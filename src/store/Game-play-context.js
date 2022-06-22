import React, { useState } from "react";

const GamePlayContext = React.createContext({
  secretWord: "",
});

export const GamePlayContextProvider = (props) => {
  const [secretWord, setSecretWord] = useState("harry potter again");
  return (
    <GamePlayContext.Provider value={{ secretWord }}>
      {props.children}
    </GamePlayContext.Provider>
  );
};

export default GamePlayContext;
