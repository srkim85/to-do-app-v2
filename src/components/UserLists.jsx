import { useTasks } from "../contexts/tasksContext";

function UserLists() {
  const { userLists, selectedUserList, setSelectedUserList } = useTasks();

  return (
    <ul className="task-lists">
      {userLists?.map((list) => (
        <li
          key={list}
          onClick={() => setSelectedUserList(userLists.indexOf(list))}
          className={`task-list ${
            list === userLists.at(selectedUserList) ? "task-list-active" : ""
          } `}
        >
          {list}
        </li>
      ))}
    </ul>
  );
}

export default UserLists;
