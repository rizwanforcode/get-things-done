import React from "react";

export const ListItem = ({ list, activeListId }) => {
  return (
    <li className={`list-name ${list.active ? "active-list" : ""}`}>
      {list.title}
    </li>
  );
};
