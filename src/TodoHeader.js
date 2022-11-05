import React from "react";

const TodoHeader = ({ lists, currentTodos, activeListId }) => {
  const currentList = lists.find((list) => list.id === activeListId);
  const noOfRemainingTodos = currentTodos.filter(
    (todo) => !todo.completed
  ).length;
  return (
    <div className="todo-header">
      <h2 className="list-title">{currentList.title}</h2>
      <p className="task-count">{`${noOfRemainingTodos} ${
        noOfRemainingTodos === 1 ? "task" : "tasks"
      } remaining`}</p>
    </div>
  );
};

export default TodoHeader;
