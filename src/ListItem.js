import React from "react";

export const ListItem = ({ lists, list, setLists }) => {
  const handleListChange = () => {
    setLists(
      lists.map((li) =>
        li.id === list.id ? { ...li, active: true } : { ...li, active: false }
      )
    );
  };
  return (
    <li
      className={`list-name ${list.active ? "active-list" : ""}`}
      onClick={(list) => {
        handleListChange();
      }}
    >
      {list.title}
    </li>
  );
};
