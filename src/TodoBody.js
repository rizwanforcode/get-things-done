import DeleteStuff from "./DeleteStuff";
import Tasks from "./Tasks";
import AddTodo from "./AddTodo";
const TodoBody = ({ currentTodos, activeListId }) => {
  return (
    <div className="todo-body">
      <Tasks currentTodos={currentTodos} />
      <AddTodo />
      <DeleteStuff />
    </div>
  );
};

export default TodoBody;
