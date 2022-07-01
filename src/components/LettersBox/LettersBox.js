import Card from "../../ui/Card";
import Tile from "../Tile";

const LettersBox = ({ letters, onTileClick, prefix }) => {
  return (
    <Card>
      {letters.map((char) => (
        <Tile char={char} handleClick={onTileClick} key={`${prefix}-${char}`} />
      ))}
    </Card>
  );
};

export default LettersBox;
