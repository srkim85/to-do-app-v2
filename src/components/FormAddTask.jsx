import { useRef, useEffect } from "react";
import { useTasks } from "../contexts/tasksContext";
import Button from "./Button";

function FormAddTask() {
  const {
    selectedUserList,
    handleAddTask,
    setShowFormAddTask,
    task,
    setTask,
    tasks,
  } = useTasks();

  const isIncluded = tasks.map((t) => t.taskName).includes(task);

  function closeAddTaskForm(e) {
    e.preventDefault();
    setShowFormAddTask((show) => !show);
    setTask("");
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!task) return;

    const newTask = {
      taskName: task,
      taskList: selectedUserList,
      completed: false,
    };

    if (isIncluded) {
      alert("Task already added");
      return;
    }

    handleAddTask(newTask);
    setShowFormAddTask((open) => !open);
    setTask("");
  }

  const inputEl = useRef(null);

  useEffect(function () {
    inputEl.current.focus();
  }, []);

  return (
    <form className="form" onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        placeholder="Type here..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="input"
        ref={inputEl}
      />
      <Button type="add-list">Add task</Button>
      <Button type="back" onClick={closeAddTaskForm}>
        &larr; Close
      </Button>
    </form>
  );
}

export default FormAddTask;
