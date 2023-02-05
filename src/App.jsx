import React, { useState, useEffect } from "react";
import Start from "./components/Start";
import Quiz from "./components/Quiz";
import Check from "./components/Check";
import { nanoid } from "nanoid";

function App() {
  // State to handle the quiz
  const [startGame, setStartGame] = useState(true);
  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState(null);
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

        answersArray = answersArray.sort(() => Math.random() - 0.5);

        answersArray = answersArray.map((ans) => {
          return {
            id: nanoid(),
            choice: decodeHtml(ans),
            isCorrect: ans === quiz.correct_answer ? true : false,
            isSelected: false,
          };
        });

        return {
          id: nanoid(),
          question: decodeHtml(quiz.question),
          answers: answersArray,
        };
      });
      setQuestions(newData);
    }

    getData();
  }, [playAgain]);

  function decodeHtml(html) {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  }

  function selectChoice(event, questionId) {
    // Get the answer fro the event (onclick)
    const selectedAnswer = event.target.innerHTML;

    // Update the question and answerChoices array
    const updatedQuestions = questions.map((quiz) => {
      if (quiz.id === questionId) {
        const updatedAnswers = quiz.answers.map((ans) => {
          if (ans.choice === selectedAnswer) {
            return {
              ...ans,
              isSelected: true,
            };
          } else {
            return {
              ...ans,
              isSelected: false,
            };
          }
        });
        return {
          ...quiz,
          answers: updatedAnswers,
        };
      } else {
        return { ...quiz };
      }
    });
    setQuestions(updatedQuestions);
  }

  function checkScore() {
    let scoreCount = 0;
    questions.forEach((quiz) => {
      quiz.answers.forEach((ans) => {
        if (ans.isSelected && ans.isCorrect) {
          scoreCount++;
        }
      });
    });
    setScore((prevScore) => scoreCount);
  }

  function letsPlayAgain() {
    setPlayAgain((prevPlay) => !prevPlay);
    setScore(null);
  }

  const quizElements = questions.map((quiz) => {
    return (
      <Quiz
        key={quiz.id}
        question={quiz.question}
        answers={quiz.answers}
        score={score}
        selectAnswer={() => selectChoice(event, quiz.id)}
      />
    );
  });

  return (
    <main className="App">
      <Start start={startGame} handleStart={() => setStartGame(!startGame)} />
      {!startGame && (
        <section className="container ">
          {quizElements}
          <Check
            score={score}
            handleScoreClick={checkScore}
            playAgainClick={letsPlayAgain}
          />
        </section>
      )}
    </main>
  );
}

export default App;
