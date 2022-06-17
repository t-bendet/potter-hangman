import { Fragment } from "react";
import AvatarAnimation from "../AvatarAnimation/";
import HangmanAnimation from "../HangmanAnimation";

const GameBoardAnimation = () => {
  return (
    <Fragment>
      <h1>Game Board Animation </h1>
      <HangmanAnimation>Hangman Animation</HangmanAnimation>
      <AvatarAnimation></AvatarAnimation>
    </Fragment>
  );
};

export default GameBoardAnimation;
