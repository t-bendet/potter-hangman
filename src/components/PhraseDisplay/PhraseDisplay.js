import { useContext } from "react";
import GamePlayContext from "../../store/Game-play-context";
import Card from "../../ui/Card";
import Tile from "../Tile";
import classes from "./PhraseDisplay.module.css";
// TODO  add keys
// todo move logic to context
const PhraseDisplay = () => {
  const ctx = useContext(GamePlayContext);
  const renderPhrase = () => {
    const wordsArray = ctx.secretWord.split(" ").map((word) => [...word]);
    const concealWord = (wordArray) => {
      return wordArray.map((char) =>
        ctx.matchedLetters.includes(char) ? char : null
      );
    };
    const concealedWordsArray = wordsArray.map(concealWord);
    const renderWords = concealedWordsArray.map((word) => {
      return (
        <div className={classes.word}>
          {word.map((char) => {
            return <Tile char={char}></Tile>;
          })}
        </div>
      );
    });
    return renderWords;
  };
  return (
    <Card>
      <div className={classes.words}>{renderPhrase()}</div>
    </Card>
  );
};

export default PhraseDisplay;
