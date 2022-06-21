import Card from "../../ui/Card";
import Tile from "../Tile";
import classes from "./PhraseDisplay.module.css";

const PhraseDisplay = ({ secretWord, discoveredLetters }) => {
  const renderPhrase = () => {
    const wordsArray = secretWord.split(" ").map((word) => [...word]);
    const concealWord = (wordArray) => {
      return wordArray.map((char) =>
        discoveredLetters.includes(char) ? char : null
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
