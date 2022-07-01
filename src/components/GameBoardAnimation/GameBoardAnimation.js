import AvatarAnimation from "../AvatarAnimation/";
import HangmanAnimation from "../HangmanAnimation";
import Panel from "../../ui/Panel";

const GameBoardAnimation = () => {
  return (
    <Panel>
      <h1>Game Board Animation </h1>
      <HangmanAnimation>Hangman Animation</HangmanAnimation>
      <AvatarAnimation></AvatarAnimation>
    </Panel>
  );
};

export default GameBoardAnimation;
