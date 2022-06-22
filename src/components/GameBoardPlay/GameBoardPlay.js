import { Fragment, useContext, useState } from "react";
import GamePlayContext from "../../store/Game-play-context";
import Card from "../../ui/Card";
import Tile from "../Tile";
import PhraseDisplay from "../PhraseDisplay";
import { LETTERS } from "./index";

const GameBoardPlay = ({ category }) => {
  const ctx = useContext(GamePlayContext);
  const [lettersBox, setLettersBox] = useState(LETTERS);
  const [usedLettersBox, setUsedLettersBox] = useState([]);
  const onTileClick = (tileChar) => {
    const i = lettersBox.indexOf(tileChar);
    const newLettersBox = [...lettersBox];
    newLettersBox.splice(i, 1);
    setLettersBox(newLettersBox);
    setUsedLettersBox([...usedLettersBox, tileChar]);
    const lowerTileChar = tileChar.toLowerCase();
    ctx.checkChar(lowerTileChar);
  };

  return (
    <Fragment>
      <Card>
        <h2>{category}</h2>
      </Card>
      <Card>The answer is...{ctx.secretWord}</Card>
      <PhraseDisplay></PhraseDisplay>
      <Card>
        {lettersBox.map((char) => (
          <Tile
            char={char}
            handleClick={onTileClick}
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
