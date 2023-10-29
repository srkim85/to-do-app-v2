import styles from "./Message.module.scss";

function Message() {
  return (
    <div className={styles.message}>
      <span>✏️ </span> Enter your first task...
    </div>
  );
}

export default Message;
