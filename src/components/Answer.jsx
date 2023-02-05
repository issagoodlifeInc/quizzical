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
  } else {
    if (isCorrect) {
      btnStyles = { backgroundColor: "var(--green)" };
    } else if (!isCorrect && isSelected) {
      btnStyles = { backgroundColor: "var(--red)" };
    }
  }

  return (
    <button className="btn__quiz" style={btnStyles} onClick={handleClick}>
      {choice}
    </button>
  );
}
