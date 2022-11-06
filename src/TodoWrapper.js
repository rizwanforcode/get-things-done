import TodoBody from "./TodoBody";
import TodoHeader from "./TodoHeader";

const TodoWrapper = ({ lists, setLists, todos, setTodos }) => {
  return (
    <div className="todo-list">
      <TodoHeader lists={lists} todos={todos} />
      <TodoBody
        lists={lists}
        setLists={setLists}
        todos={todos}
        setTodos={setTodos}
      />
    </div>
  );
};

export default TodoWrapper;
