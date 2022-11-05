import React, { useState } from "react";
import Task from "./Task";

const Tasks = ({ lists, todos, setTodos }) => {
  const activeListId = lists.find((list) => list.active).id;
  const currentTodos = todos.filter((todo) => todo.listId === activeListId);

  // Important: make the input checkbox a controlled input even though it's just a checkbox
  return (
    <div className="tasks">
      {currentTodos.map((todo) => (
        <Task todos={todos} todo={todo} setTodos={setTodos} />
      ))}
    </div>
  );
};

export default Tasks;
