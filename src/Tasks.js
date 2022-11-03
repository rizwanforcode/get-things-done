import React from "react";

const Tasks = () => {
  return (
    <div className="tasks">
      <div className="task">
        <input type="checkbox" id="task-1" />
        <label for="task-1">
          <span className="custom-checkbox"></span>
          record todo list video
        </label>
      </div>
    </div>
  );
};

export default Tasks;
