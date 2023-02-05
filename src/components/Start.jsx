export default function Start({ start, handleStart }) {
  return (
    start && (
      <div className="container start">
        <h1>Quizzical</h1>
        <p>Five random questions with multiple choices about anything </p>
        <button className="btn btn__start" onClick={handleStart}>
          Start quiz
        </button>
      </div>
    )
  );
}
