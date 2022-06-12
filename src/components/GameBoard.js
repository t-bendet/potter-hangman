import Card from "../ui/Card";

const GameBoard = () => {
  return (
    <Card>
      <div className="flex flex-col justify-between items-center shadow-md p-4 bg-white rounded-md h-[700px] w-[500px]">
        <p>Game Board</p>
        <Card>Catagory Name</Card>
        <Card>The answaer is... </Card>
        <Card>_ _ _ _ _ _ _</Card>
        <Card>Letters box</Card>
        <Card>Used letters box</Card>
      </div>
    </Card>
  );
};

export default GameBoard;
