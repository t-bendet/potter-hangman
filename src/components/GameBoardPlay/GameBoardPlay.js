import { Fragment, useState, useEffect, useContext } from "react";
import GamePlayContext from "../../store/Game-play-context";
import Card from "../../ui/Card";
import Tile from "../Tile";
import PhraseDisplay from "../PhraseDisplay";
import { LETTERS, MAX_STRIKES } from "./index";

const GameBoardPlay = ({ category }) => {
  const { secretWord } = useContext(GamePlayContext);
  const [matchedLetters, setMatchedLetters] = useState([]);
  const [lettersBox, setLettersBox] = useState(LETTERS);
  const [usedLettersBox, setUsedLettersBox] = useState([]);
  const [strikes, setStrikes] = useState(0);
  const secretWordSet = new Set([...secretWord]);
  useEffect(() => {
    if (strikes > MAX_STRIKES) {
      console.log("YOU LOSERRRRRRRRRRRRRRRRRR");
    }
  }, [strikes]);
  // ! consider letter casing,snake casing or any other casing in the original word,secret word should be trimmed
  // ! consider special charecters inside a word ('....)
  const handleTileClick = (tileChar) => {
    const i = lettersBox.indexOf(tileChar);
    console.log(i);
    const newLettersBox = [...lettersBox];
    console.log(newLettersBox);
    newLettersBox.splice(i, 1);
    console.log(newLettersBox);
    console.log(matchedLetters);

    setLettersBox(newLettersBox);
    setUsedLettersBox([...usedLettersBox, tileChar]);
    const lowerTileChar = tileChar.toLowerCase();
    console.log(lowerTileChar);
    console.log(secretWordSet);
    if (secretWordSet.has(lowerTileChar)) {
      setMatchedLetters([...matchedLetters, lowerTileChar]);
      // ? some kind of counter?,animation? who knows...
    } else {
      setStrikes((prev) => prev + 1);
      // ? animation
    }
    // todo check if the whole word is discovered and then the game is won)
    // * effect
  };
  // todo move reusable states to context
  // todo
  return (
    <Fragment>
      <Card>
        <h2>{category}</h2>
      </Card>
      <Card>The answer is...{secretWord}</Card>
      <PhraseDisplay matchedLetters={matchedLetters}></PhraseDisplay>
      <Card>
        {lettersBox.map((char) => (
          <Tile
            char={char}
            handleClick={handleTileClick}
            key={`lettersBox-${char}`}
          />
        ))}
      </Card>
      <Card>
        {usedLettersBox.map((char) => (
          <Tile char={char} key={`usedLettersBox-${char}`} />
        ))}
      </Card>
    </Fragment>
  );
};

export default GameBoardPlay;
