function TodoInput({ todo, setTodo, handleAdd }) {
  return (
    <div className="addTodo my-5 flex flex-col gap-5">
      <h2 className="text-xl font-bold">Add a Todo</h2>
      <div className="flex">
        <input
          className="w-full rounded-lg px-5 py-1"
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleAdd()}
        />
        <button
          onClick={handleAdd}
          disabled={todo.length <= 0}
          className="mx-2 bg-violet-800 hover:bg-violet-950 p-4 py-2 font-bold text-sm text-white rounded-md cursor-pointer"
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default TodoInput;
