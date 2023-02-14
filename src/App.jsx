import React, { useState, useEffect } from "react";
import Start from "./components/Start";
import Quiz from "./components/Quiz";
import Check from "./components/Check";
import { nanoid } from "nanoid";

// Pictures
import blobBlue from "./assets/images/blob-blue.png";
import blobYellow from "./assets/images/blob-yellow.png";

function App() {
  // State to handle the quiz
  const [startGame, setStartGame] = useState(true);
  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState(null);
  const [playAgain, setPlayAgain] = useState(false);

  // Category change
  const [category, setCategory] = useState("");

  React.useEffect(() => {
    let url = `https://opentdb.com/api.php?amount=5&type=multiple${category}`;
    async function getData() {
      const res = await fetch(url);
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
    console.log(url);

    getData();
  }, [playAgain, category]);

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

  // function changeCategory(event) {
  //   let cat = event.target.value;
  //   setCategory(cat);
  //   console.log(cat);
  // }

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
    <>
      <img src={blobYellow} alt="" className="yellow-blob" />
      <main className="App">
        <Start
          start={startGame}
          handleStart={() => setStartGame(!startGame)}
          // category={() => changeCategory(event)}
        />
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
      <img src={blobBlue} alt="" className="blue-blob" />
    </>
  );
}

export default App;
