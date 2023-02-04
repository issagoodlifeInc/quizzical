export default function Quiz({ question, answers }) {
  return (
    <div className="question">
      <h3>{question}</h3>
      {answers.map((ans) => (
        <button className="btn__quiz">&#039;{ans}</button>
      ))}
    </div>
  );
}
