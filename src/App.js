import React, { useState } from "react";
import GameBoard from "./components/GameBoard";
import classes from "./app.module.css";
import { GamePlayContextProvider } from "./store/Game-play-context";
import Modal from "./ui/Modal/Modal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(true);
  return (
    <GamePlayContextProvider>
      <div className={classes.app}>
        {isModalOpen && (
          <Modal
            title="Welcome to harry potter hang man bla bla"
            message="Pick A Catagorie....."
            onConfirm={() => setIsModalOpen(false)}
          />
        )}
        {true && <GameBoard />}
      </div>
    </GamePlayContextProvider>
  );
}

export default App;
