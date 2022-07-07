import Card from "../../ui/Card";
import Tile from "../Tile";

// todo add ul and li
// todo add css

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
