import AvatarAnimation from "../AvatarAnimation/";
import HangmanAnimation from "../HangmanAnimation";
import Panel from "../../ui/Panel";

const GameBoardAnimation = () => {
  return (
    <Panel>
      <HangmanAnimation>Hangman Animation</HangmanAnimation>
      <AvatarAnimation></AvatarAnimation>
    </Panel>
  );
};

export default GameBoardAnimation;
