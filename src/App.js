import { useState } from "react";
import AllLists from "./AllLists";
import Header from "./Header";
import TodoList from "./TodoList";
import { addMinutes } from "date-fns";

function App() {
  const [title, setTitle] = useState("Stuff I need to do");
  const [todos, setTodos] = useState([
    {
      id: 1,
      task: "record a todo list video",
      datetime: new Date(),
      completed: false,
      listId: 1,
    },

    {
      id: 2,
      task: "edit the video",
      datetime: new Date(),
      completed: false,
      listId: 1,
    },

    {
      id: 3,
      task: "create the thumbnail",
      datetime: new Date(),
      completed: false,
      listId: 3,
    },
  ]);
  const [lists, setLists] = useState([
    {
      id: 1,
      listName: "Youtube",
      datetime: new Date(),
      active: true,
    },
    {
      id: 2,
      listName: "Work",
      datetime: addMinutes(new Date(), 5),
      active: true,
    },
    {
      id: 3,
      listName: "Grocery",
      datetime: addMinutes(new Date(), 10),
      active: true,
    },
  ]);

  const [activeList, setActiveList] = useState(1);
  const currentTasks = todos.filter((todo) => todo.listId === activeList);

  return (
    <>
      <Header title={title} />
      <AllLists />
      <TodoList />
    </>
  );
}

export default App;
