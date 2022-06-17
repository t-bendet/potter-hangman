import { Fragment } from "react";
import Card from "../../ui/Card";
import classes from "./GameBoardPlay.module.css";

const arr = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const GameBoardPlay = () => {
  return (
    <Fragment>
      <Card>
        <h2>Characters</h2>
      </Card>
      <Card>The answer is...</Card>
      <Card>_ _ _ _ _ _ _</Card>
      <Card>
        {arr.map((char) => (
          <div className={classes.tile}>{char}</div>
        ))}
      </Card>
      <Card>
        <div className={classes.tile}>H</div>
        <div className={classes.tile}>A</div>
        <div className={classes.tile}>R</div>
        <div className={classes.tile}>R</div>
        <div className={classes.tile}>Y</div>
      </Card>
    </Fragment>
  );
};

export default GameBoardPlay;
