"use client";
import { useEffect, useState } from "react";
import styles from "./page.module.css";

// useState, useEffect...

export default function Testpage() {
  // let count = 0;

  const [count, setCount] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    console.log("გამარჯობა");
    // Dependency array:
  }, []);

  useEffect(() => {
    // მაგ. ინფორმაციის წამოღება, შენახვა localStorage-ში.
    console.log(localStorage.getItem("userName"));
  }, []);


  useEffect(() => {
  const saved = localStorage.getItem("count");
  if (saved !== null) {
    setCount(JSON.parse(saved));
  }
  setIsLoaded(true);
}, []);

useEffect(() => {
  if (isLoaded) {
    localStorage.setItem("count", JSON.stringify(count));
  }
}, [count, isLoaded]);

  const incrementByOne = () => {
    // count++;

    setCount((prevCount) => {
      // console.log(prevCount);

      return prevCount + 1;
    });
  };

  const decreamentByOne = () => {
    setCount((prevCount) => {
      if (prevCount === 0) {
      return prevCount;
   }
      return prevCount - 1;
    });
  };

return (
  <div className={styles.counter}>
    <h2>{count}</h2>
    <div className={styles.buttons}>
      <button onClick={incrementByOne}>+</button>
      <button onClick={decreamentByOne}>-</button>
    </div>
  </div>
);

  
}
