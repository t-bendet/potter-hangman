import AvatarAnimation from "../AvatarAnimation/";
import HangmanAnimation from "../HangmanAnimation";
import Panel from "../../ui/Panel";

const GameBoardAnimation = () => {
  return (
    <Panel>
      <HangmanAnimation></HangmanAnimation>
      <AvatarAnimation></AvatarAnimation>
    </Panel>
  );
};

export default GameBoardAnimation;
