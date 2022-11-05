import DeleteStuff from "./DeleteStuff";
import Tasks from "./Tasks";
import AddTodo from "./AddTodo";
const TodoBody = ({ lists, todos, setTodos }) => {
  return (
    <div className="todo-body">
      <Tasks lists={lists} todos={todos} setTodos={setTodos} />
      <AddTodo lists={lists} todos={todos} setTodos={setTodos} />
      <DeleteStuff />
    </div>
  );
};

export default TodoBody;
