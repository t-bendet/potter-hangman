import { Fragment, useState } from "react";
import Card from "../../ui/Card";
import Tile from "../Tile";
import PhraseDisplay from "../PhraseDisplay";
import { lettersBox } from "./lettersBox";

const GameBoardPlay = ({ category, secretWord }) => {
  const [discoveredLetters, setDiscoveredLetters] = useState(["h", "r"]);
  // ! consider letter casing,snake casing or any other casing in the original word
  // ! consider spaces and how to deal with them
  // ! secret word should be trimmed
  // ! consider special charecters inside a word ('....)
  // * 1)secret word : string - the original word the player has to guess
  // * 2)lettersBox : array - starts as A-Z letters,every time the player clicks on a char tile
  // todo  remove the letter from this array
  // todo push this letters to usedLettersBox
  // todo check if the letter is in secret word set
  // todo true: push letter to secretWordDisplay
  // todo false: add 1 to strikes
  // todo finally: check if game is over(either no more strikes and then the game is lost,or the whole word is discovered and then the game is won)
  // * 3) usedLettersBox : empty array - []
  // * 4) discoveredLetters - empty array - []
  // * 5) undiscoveredLetters - set of characters made from secretWord
  // todo move reusable states to context
  // todo rethink variable names
  const handleTileClick = (tileChar) => {
    console.log(tileChar);
  };
  return (
    <Fragment>
      <Card>
        <h2>{category}</h2>
      </Card>
      <Card>The answer is...{secretWord}</Card>
      <PhraseDisplay
        secretWord={secretWord}
        discoveredLetters={discoveredLetters}
      ></PhraseDisplay>
      <Card>
        <p>unUsedLettersBox</p>
        {lettersBox.map((char) => (
          <Tile
            char={char}
            handleClick={() => {
              handleTileClick(char);
            }}
          />
        ))}
      </Card>
      <Card>usedLettersBox</Card>
    </Fragment>
  );
};

// TODO  add keys

export default GameBoardPlay;
