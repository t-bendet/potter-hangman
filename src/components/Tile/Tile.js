import classes from "./Tile.module.css";

// todo handle words grouping

const Tile = ({ char, handleClick }) => {
  const cla =
    char === " " ? `${classes.tile} ${classes.invisible}` : classes.tile;
  return (
    <p className={cla} onClick={handleClick}>
      {char ? char : "_"}
    </p>
  );
};

export default Tile;
