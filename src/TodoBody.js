import DeleteStuff from "./DeleteStuff";
import Tasks from "./Tasks";
import AddTodo from "./AddTodo";
const TodoBody = () => {
  return (
    <div className="todo-body">
      <Tasks />
      <AddTodo />
      <DeleteStuff />
    </div>
  );
};

export default TodoBody;
