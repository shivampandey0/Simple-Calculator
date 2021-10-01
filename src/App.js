import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [answer, setAnswer] = useState("");
  const [a, setVariableA] = useState("");
  const [b, setVariableB] = useState("");

  function updateAnswer(operation) {
    if (a === "" || b === "") {
      setAnswer("wrong values ");
      return;
    }

    switch (operation) {
      case "+":
        setAnswer(`Addition of ${a} and ${b} would be:\n ${a + b}`);
        break;
      case "-":
        setAnswer(`Substraction of ${a} and ${b} would be: ${a - b}`);
        break;
      case "*":
        setAnswer(`Multiplication of ${a} and ${b} would be: ${a * b}`);
        break;
      case "/":
        setAnswer(`Division of ${a} and ${b} would be: ${a / b}`);
        break;

      default:
        break;
    }
  }

  return (
    <div className="App">
      <h1>Calculator</h1>
      <h3>Enter values to perform operations on them.</h3>

      <div>
        <label>
          variable a:
          <input
            onChange={(event) => setVariableA(Number(event.target.value))}
            type="number"
          ></input>
        </label>
        <label>
          variable b:
          <input
            onChange={(event) => setVariableB(Number(event.target.value))}
            type="number"
          ></input>
        </label>
      </div>

      <div>
        <button onClick={(event) => updateAnswer("+")}>+</button>
        <button onClick={(event) => updateAnswer("-")}>-</button>
        <button onClick={(event) => updateAnswer("*")}>*</button>
        <button onClick={(event) => updateAnswer("/")}>/</button>
      </div>

      <div className="answer">{answer}</div>
    </div>
  );
}
