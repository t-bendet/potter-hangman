import GameBoard from "./components/GameBoard";
import classes from "./app.module.css";
import { GamePlayContextProvider } from "./store/Game-play-context";
import Modal from "./ui/Modal/Modal";

// todo redo css flex and grids - overflowing

function App() {
  return (
    <GamePlayContextProvider>
      <div className={classes.app}>
        {false && <Modal title="Modal Title" message="Modal message" />}
        {true && <GameBoard />}
      </div>
    </GamePlayContextProvider>
  );
}

export default App;
