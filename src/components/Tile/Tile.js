import classes from "./Tile.module.css";

// todo if char === " " return an invisible tile
//  todo if char === null return a "_" tile

const Tile = ({ char }) => {
  const cla =
    char === " " ? `${classes.tile} ${classes.invisible}` : classes.tile;
  return <p className={cla}>{char === " " ? "_" : char}</p>;
};

export default Tile;
