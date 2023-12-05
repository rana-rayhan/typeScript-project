import React from "react";
import { TodoType } from "./typeOfTodo";

type myTodo = {
  todo: TodoType;
  handleDeleTodo: Function;
};

const Todo = ({ todo, handleDeleTodo }: myTodo) => {
  return (
    <div className="myTodo">
      <div className="todoTitleDiv">
        <span>{todo.id}: </span>
        <span>{todo.title}</span>
      </div>
      <button className="deleteButton" onClick={() => handleDeleTodo(todo)}>
        Delete
      </button>
    </div>
  );
};

export default Todo;
