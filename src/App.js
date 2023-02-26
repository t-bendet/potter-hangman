import React, { useState } from "react";
import { GamePlayContextProvider } from "./store/Game-play-context";
import GameBoard from "./components/GameBoard";
import WelcomeModal from "./components/WelcomeModal";
import classes from "./app.module.css";

// TODO redux
// TODO mobile first
// TODO opening screen

function App() {
  // * opens on first load only
  const [isModalOpen, setIsModalOpen] = useState(true);
  return (
    <GamePlayContextProvider>
      <div className={classes.app}>
        <GameBoard />
        {isModalOpen && (
          <WelcomeModal onConfirm={() => setIsModalOpen(false)} />
        )}
      </div>
    </GamePlayContextProvider>
  );
}

export default App;
