import React from "react";
import { Counter } from "../Counter/index";
import styles from "./task.module.css";

const Task = ({ el, counter, checkBox, deleteTask }) => {

  return (
    <li data-testid="task" className={styles.task}>
      <input
        type="checkbox"
        data-testid="task-checkbox"
        defaultChecked={el.done ? true : false}
        onClick={() => {
          checkBox(el.id);
        }}
      />
      <div data-testid="task-text">{el.text}</div>
      {/* Counter here */}
      <Counter count={el.count} counter={counter} id={el.id} />
      <button
        data-testid="task-remove-button"
        className={styles.hover}
        onClick={() => {
          deleteTask(el.id);
        }}
      >X</button>
    </li>
  );
};

export default Task;
