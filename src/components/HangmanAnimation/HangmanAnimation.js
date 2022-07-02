import { useContext } from "react";
import GamePlayContext from "../../store/Game-play-context";

const HangmanAnimation = () => {
  const ctx = useContext(GamePlayContext);
  return (
    <div>
      <h2>Hangman Animationssssss</h2>
      <p>you have used {ctx.strikes} strikes</p>
    </div>
  );
};

export default HangmanAnimation;
