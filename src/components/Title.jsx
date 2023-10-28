import styles from "./Title.module.scss";

function Title() {
  return (
    <div className={styles.title}>
      <h1>
        <span>✔️</span> Tasks
      </h1>
    </div>
  );
}

export default Title;
