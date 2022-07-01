import GameBoardPlay from "../GameBoardPlay";
import GameBoardAnimation from "../GameBoardAnimation";

import classes from "./GameBoard.module.css";

const GameBoard = () => {
  return (
    <div className={classes.container}>
      <GameBoardAnimation></GameBoardAnimation>
      <GameBoardPlay></GameBoardPlay>
    </div>
  );
};
export default GameBoard;
