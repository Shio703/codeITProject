"use client";
import { useState } from "react";
import styles from "./page.module.css";

// useState, useEffect...

export default function Testpage() {
  // let count = 0;

  const [count, setCount] = useState(0);

  const incrementByOne = () => {
    // count++;

    setCount((prevCount) => {
      console.log(prevCount);

      return prevCount + 1;
    });
  };

  const decreamentByOne = () => {
    
    setCount((prevCount) => {

      return prevCount - 1;
    
    });
  };

  return (
    <>
      <h2>{count}</h2>
      <button onClick={incrementByOne}>+</button>
      {"     "}
      <button onClick={decreamentByOne}>-</button>
    </>
  );
}
