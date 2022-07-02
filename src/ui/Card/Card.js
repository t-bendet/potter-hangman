import classes from "./Card.module.css";

const Card = ({ children, extraClasses }) => {
  return <div className={`${classes.card} ${extraClasses}`}>{children}</div>;
};

export default Card;
