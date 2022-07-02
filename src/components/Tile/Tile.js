import classes from "./Tile.module.css";

// todo replace should click be handled with || null

const Tile = ({ char, handleClick }) => {
  const shouldClickBeHandled = () => {
    if (handleClick) {
      handleClick(char);
      return;
    }
    return null;
  };
  return (
    <p className={classes.tile} onClick={shouldClickBeHandled}>
      {char ? char : "_"}
    </p>
  );
};

export default Tile;
