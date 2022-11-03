import { useState } from "react";
import AllLists from "./AllLists";
import Header from "./Header";
import TodoList from "./TodoList";

function App() {
  const [title, setTitle] = useState("Stuff I need to do");

  return (
    <>
      <Header title={title} />
      <AllLists />
      <TodoList />
    </>
  );
}

export default App;
