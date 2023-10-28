import styles from "./Tasks.module.scss";
import { useTasks } from "../contexts/tasksContext";

function Tasks() {
  const {
    selectedUserList,
    tasks,
    handleDeleteTask,
    handleToggleTask,
    handleDeleteList,
  } = useTasks();

  const selectedArr = tasks.filter(
    (task) => task.taskList === selectedUserList
  );

  return (
    <div className={styles["task-container"]}>
      <ul className={styles.tasks}>
        {selectedArr.map((task) => (
          <li key={task.taskName} className={styles.task}>
            <input
              type="checkbox"
              value={task.completed}
              onChange={() => handleToggleTask(task)}
            />
            <span
              style={task.completed ? { textDecoration: "line-through" } : {}}
            >
              {task.taskName}
            </span>
          </li>
        ))}
      </ul>

      {selectedUserList !== 0 && (<span onClick={handleDeleteList}>❌</span>)()}
    </div>
  );
}

export default Tasks;
