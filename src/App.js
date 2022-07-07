import React, { useState } from "react";
import GameBoard from "./components/GameBoard";
import classes from "./app.module.css";
import { GamePlayContextProvider } from "./store/Game-play-context";
import Modal from "./ui/Modal/Modal";

// todo redux
// todo mobile first
// todo opening screen

function App() {
  const [isModalOpen, setIsModalOpen] = useState(true);
  return (
    <GamePlayContextProvider>
      <div className={classes.app}>
        {isModalOpen && <Modal onConfirm={() => setIsModalOpen(false)} />}
        {true && <GameBoard />}
      </div>
    </GamePlayContextProvider>
  );
}

export default App;
