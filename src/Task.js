import { useState } from "react";

const Task = ({ todos, todo, setTodos }) => {
  const [defaultChecked, setDefaultChecked] = useState(todo.completed);

  const handleChecked = (e) => {
    setDefaultChecked(!defaultChecked);
    const flippedTodo = { ...todo, completed: !todo.completed };
    setTodos(todos.map((to) => (to.id === todo.id ? flippedTodo : to)));
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
      </div>
    </div>
  );
};

export default Task;
