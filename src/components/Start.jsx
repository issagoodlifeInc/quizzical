export default function Start({ start, handleStart }) {
  return (
    start && (
      <div className="container start">
        <h1>Quizzical</h1>
        <p>Some description if needed</p>
        <button className="btn btn__start" onClick={handleStart}>
          Start quiz
        </button>
      </div>
    )
  );
}
