import React, { useState } from "react";
import Button from "./Button";

export default function Table() {
  const [display, setDisplay] = useState("");

  function evaluator(expr) {
    let val = false;

    try {
      eval(expr);
    } catch (e) {
      if (e instanceof SyntaxError) {
        val = true;
      }
    }
    return val;
  }

  function screen(event) {
    if (event.target.innerText === "=") {
      if (display === "Error") {
        setDisplay("Error");
      } else if (evaluator(display)) {
        setDisplay("Error");
      } else {
        setDisplay(eval(display));
      }
    } else if (event.target.innerText === "CE") {
      setDisplay("");
    } else if (event.target.innerText === "C") {
      if (display === "Error") {
        setDisplay("");
      } else {
        setDisplay(display.slice(0, -1));
      }
    } else {
      if (display === "Error") {
        setDisplay(event.target.innerText);
      } else {
        setDisplay((prev) => prev + event.target.innerText);
      }
    }
  }

  return (
    <table>
      <tr>
        <td className="input" colSpan="4">
          <input value={display} readOnly />
        </td>
      </tr>
      <tr>
        <td>
          <Button screen={screen}>(</Button>
        </td>
        <td>
          <Button screen={screen}>CE</Button>
        </td>
        <td>
          <Button screen={screen}>)</Button>
        </td>
        <td>
          <Button screen={screen}>C</Button>
        </td>
      </tr>
      <td>
        <Button screen={screen}>1</Button>
      </td>
      <td>
        <Button screen={screen}>2</Button>
      </td>
      <td>
        <Button screen={screen}>3</Button>
      </td>
      <td>
        <Button screen={screen}>+</Button>
      </td>
      <tr>
        <td>
          <Button screen={screen}>4</Button>
        </td>
        <td>
          <Button screen={screen}>5</Button>
        </td>
        <td>
          <Button screen={screen}>6</Button>
        </td>
        <td>
          <Button screen={screen}>-</Button>
        </td>
      </tr>
      <td>
        <Button screen={screen}>7</Button>
      </td>
      <td>
        <Button screen={screen}>8</Button>
      </td>
      <td>
        <Button screen={screen}>9</Button>
      </td>
      <td>
        <Button screen={screen}>*</Button>
      </td>
      <tr>
        <td>
          <Button screen={screen}>.</Button>
        </td>
        <td>
          <Button screen={screen}>0</Button>
        </td>
        <td>
          <Button screen={screen}>=</Button>
        </td>
        <td>
          <Button screen={screen}>/</Button>
        </td>
      </tr>
    </table>
  );
}
