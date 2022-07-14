import React, { useState } from "react";
import styles from "./taskApp.module.css";
import { TaskHeader } from "./TaskHeader";
import { AddTask } from "./AddTask";
import { Tasks } from "./Tasks";

const TaskApp = () => {
  const [allTask, setAllTask] = useState([
    {
      id: 1,
      text: "Pen",
      done: true,
      count: 2,
    },
    {
      id: 2,
      text: "Pencil",
      done: true,
      count: 3,
    },
    {
      id: 3,
      text: "Book",
      done: false,
      count: 1,
    },
    {
      id: 4,
      text: "Sugar",
      done: false,
      count: 5,
    },
    
  ]);

  const checkBox = (id) => {
    let newArray = [];
    for (let i = 0; i < allTask.length; i++) {
      if (allTask[i].id === id) {
        allTask[i].done = !allTask[i].done;
      }
      // console.log(allTask[i].count);
      newArray.push(allTask[i]);
    }
    setAllTask(newArray);
  };

  const addNewTask = (name) => {
    let count = 0;
    for (let i = 0; i < allTask.length; i++) {
      if (allTask[i].text !== name) {
        count++;
      }
    }
    if (count === allTask.length) {
      let payload = {
        text: name,
        done: false,
        count: 1,
        id: allTask.length,
      };
      setAllTask([...allTask, payload]);
    }
  };

  const deleteTask = (id) => {
    let newArray = [];
    for (let i = 0; i < allTask.length; i++) {
      if (allTask[i].id === id) {
        continue;
      }
      // console.log(allTask[i].count);
      newArray.push(allTask[i]);
    }
    setAllTask(newArray);
  };

  const counter = (count, id) => {
    console.log(count);
    let newArray = [];
    for (let i = 0; i < allTask.length; i++) {
      if (allTask[i].id === id) {
        allTask[i].count = allTask[i].count + count;
      }
      // console.log(allTask[i].count);
      newArray.push(allTask[i]);
    }
    setAllTask(newArray);
  };
  // NOTE: do not delete `data-testid` key value pair
  return (
    <div data-testid="task-app" className={styles.taskApp}>
      {/* Header */}
      <TaskHeader tasks={allTask} />
      <AddTask addNewTask={addNewTask} />
      <Tasks
        tasks={allTask}
        counter={counter}
        check={checkBox}
        deleteTask={deleteTask}
      />
    </div>
  );
};

export default TaskApp;
