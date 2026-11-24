"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";

const Todo = () => {
  const [task, setTask] = useState("");
  const [tasksArray, setTasksArray] = useState([]);

  const onChange = (e) => {
    setTask(e.target.value);
    console.log(task);
  };

  const addTask = () => {
    if (!task) return;
    setTasksArray((prevTasks) => {
      return [
        ...prevTasks,
        { task: task, completed: false, id: crypto.randomUUID() },
      ];
    });
    setTask("");
  };

  const removeTask = (id) => {
    let res = tasksArray.filter((t) => t.id !== id);
    setTasksArray(res);
  };

  const toggleTask = (id) => {
    const toggledArray = tasksArray.map((t) => {
      return t.id === id ? { ...t, completed: !t.completed } : t;
    });
    setTasksArray(toggledArray);
  };

  useEffect(()=> {
    if (localStorage.getItem("todoTasks") === null) return;

    const dataInStorage = JSON.parse(localStorage.getItem("todoTasks"));
    if(dataInStorage === null) return;
    if(dataInStorage.length > 0) setTasksArray(dataInStorage);

    // throw new Error("Couldn't connect to server, try again later")
  }, []);

  useEffect(() => {
    console.log(tasksArray);
    localStorage.setItem("todoTasks", JSON.stringify(tasksArray));
  }, [tasksArray]);

  // Enter-ის listener:
  const onKeyDown = (e) => {
    if (e.key === "Enter") addTask();
  };

  return (
    <div className={styles.todoCont}>
      <div className={styles.inputCont}>
        <input
          type="text"
          onChange={onChange}
          value={task}
          onKeyDown={onKeyDown}
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <ol className={styles.listCont}>
        {tasksArray.map((t, index, array) => {
          return (
            <div key={t.id} className={styles.taskCont}>
              <li
                onClick={() => toggleTask(t.id)}
                className={t.completed ? styles.done : ""}
              >
                {t.task}
              </li>
              <button className={styles.rmBtn} onClick={() => removeTask(t.id)}>X</button>
            </div>
          );
        })}

        {tasksArray.length === 0 && <h3>{"No tasks:)"}</h3>}
      </ol>
    </div>
  );
};

export default Todo;
