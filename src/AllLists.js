import React from "react";
import AddList from "./AddList";
import { ListItem } from "./ListItem";

const AllTasks = ({ lists, setLists }) => {
  return (
    <div className="all-tasks">
      <h2 className="task-list-title">My lists</h2>
      <ul className="task-list">
        {lists
          .sort((a, b) => !(a.datetime - b.datetime))
          .map((list) => (
            <ListItem list={list} key={list.id} />
          ))}
      </ul>
      <AddList lists={lists} setLists={setLists} />
    </div>
  );
};

export default AllTasks;
