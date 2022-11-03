import TodoBody from "./TodoBody";
import TodoHeader from "./TodoHeader";

const TodoList = () => {
  return (
    <div className="todo-list">
      <TodoHeader />
      <TodoBody />
    </div>
  );
};

export default TodoList;
