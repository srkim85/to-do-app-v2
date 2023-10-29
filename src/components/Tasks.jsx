import styles from "./Tasks.module.scss";
import { useTasks } from "../contexts/tasksContext";
import Message from "./Message";

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

  if (tasks.length === 0) return <Message />;

  return (
    <div className={styles["tasks-container"]}>
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
            <span className={styles["delete-task"]} onClick={handleDeleteTask}>
              ❌
            </span>
          </li>
        ))}
      </ul>

      {selectedUserList !== 0 && (
        <span className={styles["delete-list"]} onClick={handleDeleteList}>
          ⛔
        </span>
      )}
    </div>
  );
}

export default Tasks;
