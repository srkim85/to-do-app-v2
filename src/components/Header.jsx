import { useTasks } from "../contexts/tasksContext";
import styles from "./Header.module.scss";
import UserLists from "./UserLists";
import FormAddList from "./FormAddList";
import Button from "./Button";

function Header() {
  const { showFormAddList, setShowFormAddList } = useTasks();

  function handleShowFormAddList() {
    setShowFormAddList((open) => !open);
  }

  return (
    <div className={styles.header}>
      {!showFormAddList && <UserLists />}

      {showFormAddList && <FormAddList />}

      {!showFormAddList && (
        <Button onClick={handleShowFormAddList} type="new-list">
          + New List
        </Button>
      )}
    </div>
  );
}

export default Header;
