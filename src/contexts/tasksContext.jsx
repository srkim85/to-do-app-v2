import { createContext, useContext, useState } from "react";

const TasksContext = createContext();

function TaksProvider({ children }) {
  const [userLists, setUserLists] = useState(["Master list"]);
  const [tasks, setTasks] = useState([]);

  const [selectedUserList, setSelectedUserList] = useState(0);
  const [list, setList] = useState("");
  const [task, setTask] = useState("");
  const [showFormAddTask, setShowFormAddTask] = useState(false);
  const [showFormAddList, setShowFormAddList] = useState(false);

  function handleAddTask(newTask) {
    setTasks((tasks) => [...tasks, newTask]);
  }

  function handleAddList(newList) {
    setUserLists((userLists) => [...userLists, newList]);
  }

  function handleDeleteTask(task) {
    console.log("srki");
    setTasks((tasks) => tasks.filter((t) => t !== task));
  }

  function handleToggleTask(task) {
    setTasks((tasks) =>
      tasks?.map((t) => (t === task ? { ...t, completed: !t.completed } : t))
    );
  }

  function handleDeleteList() {
    const deleteList = userLists.at(selectedUserList);
    if (selectedUserList === 0) return;

    const confirmed = window.confirm(
      "Are you sure you want to delete the list?"
    );

    if (confirmed)
      setUserLists((userLists) =>
        userLists.filter((list) => list !== deleteList)
      );

    setSelectedUserList(0);
  }

  return (
    <TasksContext.Provider
      value={{
        userLists,
        setUserLists,
        tasks,
        setTasks,
        selectedUserList,
        setSelectedUserList,
        list,
        setList,
        task,
        setTask,
        showFormAddTask,
        setShowFormAddTask,
        showFormAddList,
        setShowFormAddList,
        handleAddTask,
        handleDeleteTask,
        handleDeleteList,
        handleAddList,
        handleToggleTask,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
}

function useTasks() {
  const context = useContext(TasksContext);
  if (context === undefined)
    throw new Error("TasksContext was used outside of the TaksProvider");
  return context;
}

export { TaksProvider, useTasks };
