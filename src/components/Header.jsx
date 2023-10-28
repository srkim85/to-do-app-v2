import { useTasks } from "../contexts/tasksContext";
import styles from "./Header.module.scss";
import UserLists from "./UserLists";
import FormAddList from "./FormAddList";
import ButtonAddList from "./ButtonAddList";

function Header() {
  const { showFormAddList } = useTasks();

  return (
    <div className={styles.header}>
      {!showFormAddList && <UserLists />}

      {showFormAddList && <FormAddList />}

      {!showFormAddList && <ButtonAddList />}
    </div>
  );
}

export default Header;
