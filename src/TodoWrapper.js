import TodoBody from "./TodoBody";
import TodoHeader from "./TodoHeader";

const TodoWrapper = ({ currentTodos, lists, activeListId }) => {
  return (
    <div className="todo-list">
      <TodoHeader
        currentTodos={currentTodos}
        lists={lists}
        activeListId={activeListId}
      />
      <TodoBody currentTodos={currentTodos} activeListId={activeListId} />
    </div>
  );
};

export default TodoWrapper;
