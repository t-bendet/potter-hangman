import classes from "./Tile.module.css";

const Tile = ({ char, handleClick }) => {
  const isClickHandled = () => {
    if (handleClick) {
      handleClick(char);
      return;
    }
    return null;
  };
  return (
    <p className={classes.tile} onClick={isClickHandled}>
      {char ? char : "_"}
    </p>
  );
};

export default Tile;
