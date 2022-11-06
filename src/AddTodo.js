import { useState } from "react";

const TasksCreator = ({ lists, todos, setTodos }) => {
  const [newTask, setNewTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const taskToBeAdded = {
      id: todos.length ? todos[todos.length - 1].id + 1 : 0,
      title: newTask,
      datetime: new Date(),
      completed: false,
      listId: lists.find((list) => list.active).id,
    };

    setTodos([...todos, taskToBeAdded]);

    setNewTask("");
  };

  return (
    <div className="new-task-creator">
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          className="new task"
          placeholder="new task name"
          aria-label="new task name"
          value={newTask}
          onChange={(e) => {
            setNewTask(e.target.value);
          }}
          required
        />
        <button className="btn create" aria-label="create new task">
          +
        </button>
      </form>
    </div>
  );
};

export default TasksCreator;
