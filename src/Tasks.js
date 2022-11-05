import React from "react";

const Tasks = ({ currentTodos }) => {
  // Important: make the input checkbox a controlled input even though it's just a checkbox
  return (
    <div className="tasks">
      {currentTodos.map((todo) => (
        <div className="task" key={todo.id}>
          <input
            type="checkbox"
            id={`tasks-${todo.id}`}
            checked={todo.completed}
          />
          <label for={`tasks-${todo.id}`}>
            <span className="custom-checkbox"></span>
            {todo.title}
          </label>
        </div>
      ))}
    </div>
  );
};

export default Tasks;
