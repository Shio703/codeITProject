"use client";
import { useEffect, useState } from "react";
import styles from "./page.module.css";

// useState, useEffect...

export default function Testpage() {
  // let count = 0;

  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("გამარჯობა");
    // Dependency array:
  }, []);

  useEffect(() => {
    // მაგ. ინფორმაციის წამოღება, შენახვა localStorage-ში.
    console.log(localStorage.getItem("userName"));
  }, []);

  const incrementByOne = () => {
    // count++;

    setCount((prevCount) => {
      // console.log(prevCount);

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
