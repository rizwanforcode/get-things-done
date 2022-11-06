const DeleteStuff = ({ lists, setLists, todos, setTodos }) => {
  const clearAllCompleted = () => {
    const activeListId = lists.find((list) => list.active).id;
    const currentTodos = todos.filter((todo) => todo.listId === activeListId);
    const completedTasks = currentTodos.filter((todo) => todo.completed);
    setTodos(todos.filter((todo) => !completedTasks.includes(todo)));
  };

  const deleteList = () => {
    setLists(lists.filter((list) => !list.active));
  };
  return (
    <div className="delete-stuff">
      <button
        className="btn delete bg-btn"
        onClick={() => {
          clearAllCompleted();
        }}
      >
        Clear completed tasks
      </button>
      <button
        className="btn delete bg-btn"
        onClick={() => {
          deleteList();
        }}
      >
        Delete list
      </button>
    </div>
  );
};

export default DeleteStuff;
