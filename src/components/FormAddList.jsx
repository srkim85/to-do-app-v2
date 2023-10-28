import styles from "./FormAddList.module.scss";
import Button from "./Button";

import { useEffect, useRef } from "react";
import { useTasks } from "../contexts/tasksContext";

function FormAddList() {
  const { userLists, handleAddList, setShowFormAddList, list, setList } =
    useTasks();

  const isIncluded = userLists.includes(list);

  const inputEl = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    if (!list) return;
    if (isIncluded) {
      alert("Task already added");
      return;
    }

    handleAddList(list);
    setShowFormAddList((open) => !open);
    setList("");
  }

  function closeAddListForm(e) {
    e.preventDefault();
    setShowFormAddList((show) => !show);
    setList("");
  }

  useEffect(function () {
    inputEl.current.focus();
  }, []);

  return (
    <form
      className={`form ${styles["form-add-list"]}`}
      onSubmit={(e) => handleSubmit(e)}
    >
      <input
        type="text"
        placeholder="Type here..."
        value={list}
        onChange={(e) => setList(e.target.value)}
        className="input input-new-list"
        ref={inputEl}
      />
      <Button type="add-list">+ Add list</Button>
      <Button type="back" onClick={closeAddListForm}>
        &larr; Close
      </Button>
    </form>
  );
}

export default FormAddList;
