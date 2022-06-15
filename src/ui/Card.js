const Card = ({ classes, children }) => {
  return (
    <div className={`shadow-md p-4 bg-white rounded-md ${classes}`}>
      {children}
    </div>
  );
};

export default Card;
