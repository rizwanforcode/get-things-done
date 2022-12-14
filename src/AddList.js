import { useState } from "react";

const AddList = ({ lists, setLists }) => {
  const [newList, setNewList] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newListObj = {
      id: lists.length ? lists[lists.length - 1].id + 1 : 0,
      title: newList,
      datetime: new Date(),
      active: true,
    };
    setLists([
      ...lists.map((list) => ({ ...list, active: false })),
      newListObj,
    ]);

    setNewList("");
  };

  return (
    <form
      action=""
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <input
        type="text"
        className="new list"
        placeholder="new list name"
        aria-label="new list name"
        value={newList}
        onChange={(e) => {
          setNewList(e.target.value);
        }}
        required
      />
      <button className="btn create" aria-label="create new list">
        +
      </button>
    </form>
  );
};

export default AddList;
