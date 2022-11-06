import DeleteStuff from "./DeleteStuff";
import Tasks from "./Tasks";
import AddTodo from "./AddTodo";
const TodoBody = ({ lists, setLists, todos, setTodos }) => {
  return (
    <div className="todo-body">
      <Tasks lists={lists} todos={todos} setTodos={setTodos} />
      <AddTodo lists={lists} todos={todos} setTodos={setTodos} />
      <DeleteStuff
        lists={lists}
        setLists={setLists}
        todos={todos}
        setTodos={setTodos}
      />
    </div>
  );
};

export default TodoBody;
