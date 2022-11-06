const DeleteStuff = ({ lists, setLists, todos, setTodos }) => {
  const clearAllCompleted = () => {
    const activeListId = lists.find((list) => list.active).id;
    const currentTodos = todos.filter((todo) => todo.listId === activeListId);
    const completedTasks = currentTodos.filter((todo) => todo.completed);
    setTodos(todos.filter((todo) => !completedTasks.includes(todo)));
  };

  const deleteList = () => {
    if (lists.length === 1) {
      return;
    }
    const activeList = lists.find((list) => list.active);
    const activeListId = activeList.id;

    const sortedList = lists.sort(
      (a, b) => Number(a.datetime) - Number(b.datetime)
    );

    const activeListIndex = sortedList.indexOf(activeList);

    setLists(
      sortedList.map((list, index) => ({
        ...list,
        active: index === (activeListIndex + 1) % sortedList.length,
      }))
    );

    setLists((prevLists) => {
      return prevLists.filter((list) => list.id !== activeListId);
    });
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
