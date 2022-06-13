import Card from "../ui/Card";

const GameBoard = () => {
  return (
    <div className="game-board">
      <div className="h-full flex flex-col justify-around">
        <Card>Hangman Animation</Card>
        <Card>Floating Avatar</Card>
      </div>
      <div className="h-full flex flex-col justify-around">
        <Card>Category Name</Card>
        <Card>The answer is... </Card>
        <Card>_ _ _ _ _ _ _</Card>
        <Card>Letters box</Card>
        <Card>Used letters box</Card>
      </div>
    </div>
  );
};

export default GameBoard;
