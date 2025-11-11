function TodoFilter({ showCompleted, toggleCompleted }) {
  return (
    <div className="my-4">
      <input
        id="show-completed"
        className="cursor-pointer"
        onChange={toggleCompleted}
        type="checkbox"
        checked={showCompleted}
      />
      <label className="mx-2 cursor-pointer" htmlFor="show-completed">
        Show Completed
      </label>
    </div>
  );
}

export default TodoFilter;
