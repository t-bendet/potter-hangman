import { useContext, useState } from "react";
import GamePlayContext from "../../store/Game-play-context";
import Card from "../../ui/Card";
import Panel from "../../ui/Panel";
import PhraseDisplay from "../PhraseDisplay";
import LettersBox from "../LettersBox";
import { LETTERS } from "./index";

const GameBoardPlay = (props) => {
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
    ctx.updateGameProgress(lowerTileChar);
  };

  return (
    <Panel>
      <Card>
        <h2>{ctx.category}</h2>
      </Card>
      <Card>
        <h3>The answer is...{ctx.secretWord}</h3>
      </Card>
      <PhraseDisplay></PhraseDisplay>
      <LettersBox
        letters={lettersBox}
        onTileClick={onTileClick}
        prefix="lettersBox"
      ></LettersBox>
      <LettersBox letters={usedLettersBox} prefix="usedLettersBox"></LettersBox>
    </Panel>
  );
};

export default GameBoardPlay;
