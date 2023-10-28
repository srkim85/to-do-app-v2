import { useTasks } from "../contexts/tasksContext";
import FormAddTask from "./FormAddTask";
import styles from "./AddTask.module.scss";
import Button from "./Button";

function AddTask() {
  const { showFormAddTask, setShowFormAddTask } = useTasks();

  function handleAddShowFormTask() {
    setShowFormAddTask((open) => !open);
  }

  return (
    <div className={styles["add-task"]}>
      {showFormAddTask && <FormAddTask />}

      {!showFormAddTask && (
        <Button type="new-task" onClick={handleAddShowFormTask}>
          + New Task
        </Button>
      )}
    </div>
  );
}

export default AddTask;
