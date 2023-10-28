import Button from "./Button";

import { useTasks } from "../contexts/tasksContext";

function ButtonAddList() {
  const { setShowFormAddList } = useTasks();

  return (
    <Button onClick={() => setShowFormAddList((open) => !open)} type="add-list">
      + Add list
    </Button>
  );
}

export default ButtonAddList;
