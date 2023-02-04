import React, { useState, useEffect } from "react";
import Start from "./components/Start";
import Quiz from "./components/Quiz";
import { nanoid } from "nanoid";

function App() {
  // State to handle the quiz
  const [startGame, setStartGame] = useState(true);
  const [questions, setQuestions] = useState([]);
  const [playAgain, setPlayAgain] = useState(false);

  React.useEffect(() => {
    async function getData() {
      const res = await fetch(
        "https://opentdb.com/api.php?amount=5&type=multiple"
      );
      const data = await res.json();

      const newData = data.results.map((quiz) => {
        let answersArray = [];
        answersArray.push(quiz.correct_answer);
        answersArray.push(...quiz.incorrect_answers);
        return {
          id: nanoid(),
          question: quiz.question,
          answer: quiz.correct_answer,
          answers: answersArray.sort(() => Math.random() - 0.5),
          isSelected: false,
        };
      });
      setQuestions(newData);
    }

    getData();
    // console.log(getData());
  }, [playAgain]);

  console.log(questions);

  const quizElements = questions.map((quiz) => {
    return (
      <Quiz key={quiz.id} question={quiz.question} answers={quiz.answers} />
    );
  });

  return (
    <main className="App">
      <Start start={startGame} handleStart={() => setStartGame(!startGame)} />
      {!startGame && (
        <section className="container ">
          {quizElements};<button className="btn__check">Check Answers</button>
        </section>
      )}
    </main>
  );
}

export default App;
