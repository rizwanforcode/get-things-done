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
      datetime: addMinutes(new Date(), 2),
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

  return (
    <>
      <Header title={title} />
      <AllLists lists={lists} setLists={setLists} />
      <TodoWrapper
        lists={lists}
        setLists={setLists}
        todos={todos}
        setTodos={setTodos}
      />
    </>
  );
}

export default App;
