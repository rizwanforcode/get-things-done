import { useState } from "react";
import AllLists from "./AllLists";
import Header from "./Header";
import TodoWrapper from "./TodoWrapper";
import { addMinutes } from "date-fns";

function App() {
  const [title, setTitle] = useState("Stuff I need to do");
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "record a todo list video",
      datetime: new Date(),
      completed: false,
      listId: 1,
    },

    {
      id: 2,
      title: "edit the video",
      datetime: new Date(),
      completed: true,
      listId: 1,
    },

    {
      id: 3,
      title: "get the paperwork",
      datetime: new Date(),
      completed: false,
      listId: 2,
    },
  ]);
  const [lists, setLists] = useState([
    {
      id: 1,
      title: "Youtube",
      datetime: new Date(),
      active: true,
    },
    {
      id: 2,
      title: "Work",
      datetime: addMinutes(new Date(), 5),
      active: false,
    },
    {
      id: 3,
      title: "Grocery",
      datetime: addMinutes(new Date(), 10),
      active: false,
    },
    {
      id: 4,
      title: "Assignments",
      datetime: addMinutes(new Date(), 20),
      active: false,
    },
  ]);

  const [activeListId, setActiveListId] = useState(
    lists.find((list) => list.active).id
  );
  const currentTodos = todos.filter((todo) => todo.listId === activeListId);
  return (
    <>
      <Header title={title} />
      <AllLists lists={lists} setLists={setLists} activeListId={activeListId} />
      <TodoWrapper
        currentTodos={currentTodos}
        lists={lists}
        activeListId={activeListId}
      />
    </>
  );
}

export default App;
