import classes from "./Tile.module.css";

const Tile = ({ char, handleClick }) => {
  return (
    <h2
      className={classes.tile}
      onClick={() => (handleClick ? handleClick(char) : null)}
    >
      {char ? char : "_"}
    </h2>
  );
};

export default Tile;
