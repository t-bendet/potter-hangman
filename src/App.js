import { Fragment } from "react";
import Card from "./ui/Card";
import GameBoard from "./components/GameBoard";

const Modal = () => {
  return (
    <Card>
      <div className="max-w-2xl">
        <h1 className="text-4xl">Hangman</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl
          eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a
          bibendum metus. Donec scelerisque sollicitudin enim eu venenatis. Duis
          tincidunt laoreet ex, in pretium orci vestibulum eget. Class aptent
          taciti sociosqu ad litora torquent
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl
          eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a
          bibendum metus. Donec scelerisque sollicitudin enim eu venenatis. Duis
          tincidunt laoreet ex, in pretium orci vestibulum eget. Class aptent
          taciti sociosqu ad litora torquent
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl
          eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a
          bibendum metus. Donec scelerisque sollicitudin enim eu venenatis. Duis
          tincidunt laoreet ex, in pretium orci vestibulum eget. Class aptent
          taciti sociosqu ad litora torquent
        </p>
        <button>Start</button>
      </div>
    </Card>
  );
};

function App() {
  return (
    <Fragment>
      {false && Modal}
      <GameBoard />
    </Fragment>
  );
}

export default App;
