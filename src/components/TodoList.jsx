import TodoItem from "./TodoItem";

function TodoList({ todos, showCompleted, handleEdit, handleDelete, handleCheckbox }) {
  if (todos.length === 0) {
    return <div className="m-5">No todos to display</div>;
  }

  return (
    <div className="todos">
      {todos
        .filter(item => showCompleted || !item.isCompleted)
        .map(item => (
          <TodoItem
            key={item.id}
            item={item}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
            handleCheckbox={handleCheckbox}
          />
        ))}
    </div>
  );
}

export default TodoList;
