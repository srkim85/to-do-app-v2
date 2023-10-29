import styles from "./UserLists.module.scss";
import { useTasks } from "../contexts/tasksContext";

function UserLists() {
  const { userLists, selectedUserList, setSelectedUserList } = useTasks();

  return (
    <ul className={styles["task-lists"]}>
      {userLists?.map((list) => (
        <li
          key={list}
          onClick={() => setSelectedUserList(userLists.indexOf(list))}
          className={`${styles["task-list"]} ${
            list === userLists.at(selectedUserList)
              ? styles["task-list-active"]
              : ""
          } `}
        >
          {list}
        </li>
      ))}
    </ul>
  );
}

export default UserLists;
