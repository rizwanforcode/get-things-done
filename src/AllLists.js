import React from "react";
import AddList from "./AddList";

const AllTasks = () => {
  return (
    <div className="all-tasks">
      <h2 className="task-list-title">My lists</h2>
      <ul className="task-list">
        <li className="list-name active-list">Youtube</li>
        <li className="list-name">Work</li>
        <li className="list-name">Grocery</li>
      </ul>
      <AddList />
    </div>
  );
};

export default AllTasks;
