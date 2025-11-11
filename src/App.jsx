import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import TodoInput from "./components/TodoInput";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";
import { v4 as uuidv4 } from "uuid";
import "./index.css";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [showCompleted, setShowCompleted] = useState(true);
  useEffect(() => {
    let todoString = localStorage.getItem("todos")
    if(todoString){
 let todos = JSON.parse(localStorage.getItem("todos"))
   setTodos(todos)
    }
  }, [])
const saveToLS = (params) => {
  localStorage.setItem("todos", JSON.stringify(todos))
}

  const handleAdd = () => {
    if (todo.trim() === "") return;
    setTodos([...todos, { id: uuidv4(),todo, isCompleted: false}]);
    setTodo("");
  };

  const handleEdit = (e, id) => {
    const target = todos.find((t) => t.id === id);
    if (target) {
      setTodo(target.todo);
      setTodos(todos.filter((t) => t.id !== id));
    }
  };

  const handleDelete = (e, id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  

const handleCheckbox = (e) =>{
    let id = e.target.name;
    let index = todos.findIndex(item=>{
      return item.id === id;
    })
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
      setTodos(newTodos)
     saveToLS()
   }


  const toggleCompleted = () => {
    setShowCompleted(!showCompleted);
  };

  return (
    <>
      <Navbar />
      <div className="mx-3 md:container md:mx-auto my-5 rounded-xl p-3 bg-violet-100 min-h-[80vh] md:w-[35%]">
        <h1 className="bg-violet-200 font-bold text-center text-2xl">
          iTask – Manage your todos at one place
        </h1>

        <TodoInput todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
        <TodoFilter
          showCompleted={showCompleted}
          toggleCompleted={toggleCompleted}
        />

        <div className="h-1 bg-black opacity-15 w-[90%] mx-auto my-2"></div>

        <h2 className="text-xl font-bold">Your Todos</h2>
        <TodoList
          todos={todos}
          showCompleted={showCompleted}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          handleCheckbox={handleCheckbox}
        />
      </div>
    </>
  );
}

export default App;
