export default function Start({ start, handleStart }) {
  return (
    start && (
      <div className="container start">
        <h1>Quizzical</h1>
        <p>Five random questions with multiple choices about anything </p>

        {/* <label htmlFor="category">Select Category:- </label>
        <select name="category">
          <option value="">Any Category</option>
          <option value="&category=21" onSelect={(category)}>
            Sports
          </option>
          <option value="$category=18">Science: Computers</option>
          <option value="$category=11">Politics</option>
          <option value="$category=23">Entertainment: Films</option>
          <option value="$category=13">Art</option>
          <option value="$category=24">Animals</option>
        </select> */}

        <button className="btn btn__start" onClick={handleStart}>
          Start quiz
        </button>
      </div>
    )
  );
}
