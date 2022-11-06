import { useState } from "react";

const Task = ({ todos, todo, setTodos }) => {
  const [defaultChecked, setDefaultChecked] = useState(todo.completed);

  const handleChecked = (e) => {
    setTodos(
      todos.map((to) =>
        to.id === todo.id ? { ...todo, completed: !todo.completed } : to
      )
    );
  };

  const handleTaskDelete = () => {
    console.log("todo");
    setTodos(todos.filter((to) => to.id !== todo.id));
  };

  return (
    <div>
      <div className="task" key={todo.id}>
        <input
          type="checkbox"
          id={`tasks-${todo.id}`}
          defaultChecked={defaultChecked}
          onChange={(e) => {
            handleChecked(e);
          }}
        />
        <label htmlFor={`tasks-${todo.id}`}>
          <span className="custom-checkbox"></span>
          {todo.title}
        </label>
        <button className="delete-task-btn" onClick={handleTaskDelete}>
          x
        </button>
      </div>
    </div>
  );
};

export default Task;
