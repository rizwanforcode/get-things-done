import React from "react";

export const ListItem = ({ list, activeListId }) => {
  return (
    <li
      className={`list-name ${activeListId === list.id ? "active-list" : ""}`}
    >
      {list.title}
    </li>
  );
};
