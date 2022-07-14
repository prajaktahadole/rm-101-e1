import React from "react";
import styles from "./taskHeader.module.css";

const TaskHeader = ({ tasks }) => {
  // sample values to be replaced
  let AllTask = tasks.length;
  let unCompletedTask = 0;
  for (let i = 0; i < tasks.length; i++) {
    if (!tasks[i].done) {
      unCompletedTask++;
    }
  }

  // NOTE: do not delete `data-testid` key value pair
  return (
    <div data-testid="task-header" className={styles.taskHeader}>
      <h1>Todo List</h1>
      You have
      <b data-testid="header-remaining-task" className={styles.b}>
        {unCompletedTask}
      </b>
      of
      <b data-testid="header-total-task" className={styles.b}>
        {AllTask}
      </b>{" "}
      Taks remaining
    </div>
  );
};

export default TaskHeader;
