import Card from "../../ui/Card";
import Tile from "../Tile";
import classes from "./LettersBox.module.css";

const LettersBox = ({ letters, onTileClick, prefix }) => {
  return (
    <Card>
      <ul className={classes.list}>
        {letters.map((char) => (
          <li>
            <Tile
              char={char}
              handleClick={onTileClick}
              key={`${prefix}-${char}`}
            />
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default LettersBox;
