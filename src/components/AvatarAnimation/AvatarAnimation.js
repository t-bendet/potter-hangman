import { useContext } from "react";
import GamePlayContext from "../../store/Game-play-context";

const AvatarAnimation = () => {
  const ctx = useContext(GamePlayContext);
  return (
    <div>
      <h2>AvatarAnimationsssss</h2>
      <p>you have used {ctx.strikes} strikes</p>
    </div>
  );
};

export default AvatarAnimation;
