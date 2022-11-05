import React from "react";

export const ListItem = ({ list }) => {
  return (
    <li className={`list-name ${list.active ? "active-list" : ""}`}>
      {list.title}
    </li>
  );
};
