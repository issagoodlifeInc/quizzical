import Answer from "./Answer";

export default function Quiz({ question, answers, selectAnswer, score }) {
  const answerElements = answers.map((ans) => (
    <Answer
      key={ans.id}
      choice={ans.choice}
      score={score}
      isSelected={ans.isSelected}
      isCorrect={ans.isCorrect}
      handleClick={selectAnswer}
    />
  ));

  return (
    <div className="question">
      <h3>{question}</h3>
      {answerElements}
    </div>
  );
}
