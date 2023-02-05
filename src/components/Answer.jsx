export default function Answer({
  handleClick,
  isSelected,
  isCorrect,
  choice,
  score,
}) {
  let btnStyles;

  if (score === null) {
    btnStyles = {
      backgroundColor: isSelected ? "var(--lightPurple)" : "var(--white)",
    };
  }
  if (isCorrect && score != null) {
    btnStyles = { backgroundColor: "var(--green)" };
  }
  if (!isCorrect && isSelected && score != null) {
    btnStyles = { backgroundColor: "var(--red)" };
  }

  return (
    <button className="btn__quiz" style={btnStyles} onClick={handleClick}>
      {choice}
    </button>
  );
}
