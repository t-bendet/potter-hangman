import Panel from "../../ui/Panel";
import GameBoardPlay from "../GameBoardPlay";
import GameBoardAnimation from "../GameBoardAnimation";

import classes from "./GameBoard.module.css";

const GameBoard = () => {
  return (
    <div className={classes.container}>
      <Panel>
        <GameBoardAnimation></GameBoardAnimation>
      </Panel>
      <Panel>
        <GameBoardPlay></GameBoardPlay>
      </Panel>
    </div>
  );
};
export default GameBoard;
