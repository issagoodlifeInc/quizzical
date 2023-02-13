export default function Start({ start, handleStart, category }) {
  return (
    start && (
      <div className="container start">
        <h1>Quizzical</h1>
        <p>Five random questions with multiple choices about anything </p>

        <label htmlFor="category">Select Category:- </label>
        <select name="category">
          <option value="21">Any Category</option>
          <option value="21" onSelect={category}>
            Sports
          </option>
          <option value="18">Science: Computers</option>
          <option value="">Politics</option>
          <option value="">Entertainment: Films</option>
          <option value="">Art</option>
          <option value="">Animals</option>
        </select>

        <button className="btn btn__start" onClick={handleStart}>
          Start quiz
        </button>
      </div>
    )
  );
}
