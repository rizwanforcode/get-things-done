import React from "react";

const TodoHeader = ({ lists, todos }) => {
  const activeList = lists.find((list) => list.active);
  const { id: activeListId, title: activeListTitle } = activeList;
  const activeTodos = todos.filter((todo) => todo.id === activeListId);
  const noOfRemainingTodos = activeTodos.length;

  return (
    <div className="todo-header">
      <h2 className="list-title">{activeListTitle}</h2>
      <p className="task-count">{`${noOfRemainingTodos} ${
        noOfRemainingTodos === 1 ? "task" : "tasks"
      } remaining`}</p>
    </div>
  );
};

export default TodoHeader;
