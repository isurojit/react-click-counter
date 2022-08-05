import React, { useState } from "react";
import Card from "./UI/Card";

import classes from "./App.module.css";

const App = () => {
  const [clickCounter, setClickCounter] = useState(0);

  const clickCounterHandler = (e) => {
    if (e.target.innerText === "+") {
      setClickCounter((preState) => {
        return preState + 1;
      });
    } else {
      setClickCounter((preState) => {
        return preState - 1;
      });
    }
  };
  return (
    <Card>
      <button onClick={clickCounterHandler} className={classes.btn}>
        +
      </button>
      <h1 className={classes.title}>{clickCounter}</h1>
      <button onClick={clickCounterHandler} className={classes.btn}>
        -
      </button>
    </Card>
  );
};

export default App;
