"use client";
import React, { useState } from "react";
import styles from "./page.module.css";

const Todo = () => {
  const [task, setTask] = useState("");
  const [tasksArray, setTasksArray] = useState([]);

  const onChange = (e) => {
    setTask(e.target.value);
    console.log(task);
  };

  const addTask = () => {};

  return (
    <div className={styles.todoCont}>
      <input type="text" onChange={onChange} />
      <button onClick={addTask}>Add Task</button>
      <ol className={styles.listCont}>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ol>
    </div>
  );
};

export default Todo;
