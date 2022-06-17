import { Fragment } from "react";
import Card from "../../ui/Card";

const GameBoardPlay = () => {
  return (
    <Fragment>
      <h1>Game Board Play </h1>
      <Card>Category Name</Card>
      <Card>The answer is...</Card>
      <Card>_ _ _ _ _ _ _</Card>
      <Card>Letters box</Card>
      <Card>Used letters box</Card>
    </Fragment>
  );
};

export default GameBoardPlay;
