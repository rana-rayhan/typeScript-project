import React, { useReducer, useState } from "react";
import Todos from "./components/Todos";
import "./index.css";

const myTodos = {
  todos: [
    { id: 1, title: "Title 1" },
    { id: 2, title: "Title 2" },
    { id: 3, title: "Title 3" },
    { id: 4, title: "Title 4" },
  ],
};

type actionT = {
  type: "addTodo" | "deleteTodo";
  payload: {
    id: number;
    title: string;
  };
};

const reducer = (state: typeof myTodos, action: actionT) => {
  switch (action.type) {
    case "addTodo":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case "deleteTodo":
      const filterTodo = [...state.todos].filter(
        (todo) => todo.id !== action.payload.id
      );
      return {
        ...state,
        todos: filterTodo,
      };
    default:
      return state;
  }
};
const App = () => {
  const [state, dispatch] = useReducer(reducer, myTodos);
  const [todoV, setTodoV] = useState("");
  const handleTodoValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoV(e.target.value);
  };

  const handleAdd = () => {
    const data = { id: state.todos.length + 1, title: todoV };
    dispatch({ type: "addTodo", payload: data });
    setTodoV("");
  };

  const handleDeleteTodo = (todo: { id: number; title: string }) => {
    dispatch({ type: "deleteTodo", payload: todo });
  };

  return (
    <div className="myApp">
      <input
        className="myInput"
        type="text"
        required
        placeholder="Todo title"
        value={todoV}
        onChange={handleTodoValue}
      />
      <button className="addButton" onClick={handleAdd}>
        add
      </button>
      <Todos todos={state.todos} handleDeleTodo={handleDeleteTodo} />
    </div>
  );
};

export default App;
