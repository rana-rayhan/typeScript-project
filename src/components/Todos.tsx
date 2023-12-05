import Todo from "./Todo";
import { TodoType } from "./typeOfTodo";

type todoProps = {
  todos: TodoType[];
  handleDeleTodo: Function
};

const Todos = ({ todos, handleDeleTodo }: todoProps) => {
  return (
    <div className="myTodos">
      {todos.map((el) => (
        <Todo key={el.id} todo={el} handleDeleTodo={handleDeleTodo} />
      ))}
    </div>
  );
};

export default Todos;
