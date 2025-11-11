import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

function TodoItem({ item, handleEdit, handleDelete, handleCheckbox }) {
  return (
    <div className="todo flex my-3 justify-between items-center">
      <div className="flex gap-5 items-center">
        <input
          name={item.id}
          onChange={handleCheckbox}
          type="checkbox"
          checked={item.isCompleted}
          className="cursor-pointer"
        />
        <span
          className={`text-lg ${item.isCompleted ? "line-through text-gray-500" : "text-black"}`}
        >
          {item.todo}
        </span>
      </div>
      <div className="button flex h-full">
        <button
          onClick={(e) => handleEdit(e, item.id)}
          className="bg-violet-800 hover:bg-violet-950 p-2 font-bold text-sm py-1 text-white rounded-md mx-1"
        >
          <FaEdit />
        </button>
        <button
          onClick={(e) => handleDelete(e, item.id)}
          className="bg-violet-800 hover:bg-violet-950 p-2 font-bold text-sm py-1 text-white rounded-md mx-1"
        >
          <MdDelete />
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
