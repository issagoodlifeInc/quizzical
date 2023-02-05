export default function Check({ score, handleScoreClick, playAgainClick }) {
  if (score === null) {
    return (
      <button className="btn__check" onClick={handleScoreClick}>
        Check Answers
      </button>
    );
  } else {
    return (
      <>
        <p>You scored {score}/5 correct answers </p>
        <button onClick={playAgainClick} className="btn_play">
          Play Again
        </button>
      </>
    );
  }
}
