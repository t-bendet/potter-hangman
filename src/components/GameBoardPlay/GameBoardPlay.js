import { Fragment, useState } from "react";
import Card from "../../ui/Card";
import Tile from "../Tile";
import classes from "./GameBoardPlay.module.css";

const lettersBox = [
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

const GameBoardPlay = ({ category, secretWord }) => {
  const [discoveredLetters, setDiscoveredLetters] = useState([]);
  const [undiscoveredLetters, setUndiscoveredLetters] = useState(
    new Set([...secretWord.split(" ").join("")])
  );
  const [wordDisplay, setWordDisplay] = useState([...secretWord]);
  // ! consider letter casing,snake casing or any other casing in the original word
  // ! consider spaces and how to deal with them
  // ? how to handle words,a single word letters needs to be on the same line
  // * 1)secret word : string - the original word the player has to guess
  // * 2)lettersBox : array - starts as A-Z letters,every time the player clicks on a char tile
  // todo  remove the letter from this array
  // todo push this letters to usedLettersBox
  // todo check if the letter is in secret word set
  // todo true: push letter to secretWordDisplay
  // todo false: add 1 to strikes
  // todo finally: check if game is over(either no more strikes and then the game is lost,or the whole word is discovered and then the game is won)

  return (
    <Fragment>
      <Card>
        <h2>{category}</h2>
      </Card>
      <Card>The answer is...{secretWord}</Card>
      <Card>
        {wordDisplay.map((char) => (
          <Tile char={char} />
        ))}
      </Card>
      <Card>
        {lettersBox.map((char) => (
          <Tile char={char} />
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

// TODO  tile should be a component

export default GameBoardPlay;
