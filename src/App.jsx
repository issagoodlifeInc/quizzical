import { useState } from "react";
import Start from "./components/Start";
import Quiz from "./components/Quiz";

function App() {
  const [startGame, setStartGame] = useState(true);
  console.log(startGame);
  return (
    <main className="App">
      <Start start={startGame} handleStart={() => setStartGame(!startGame)} />
      <Quiz start={startGame} />
    </main>
  );
}

export default App;
