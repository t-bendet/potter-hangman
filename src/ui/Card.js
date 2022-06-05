const Card = (props) => {
  return (
    <div className="shadow-md p-4 bg-white rounded-md">{props.children}</div>
  );
};

export default Card;
