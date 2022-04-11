import React, { useState } from "react";

import styles from "./Timer.module.css";

const Timer = (props) => {
  let [countDown, setCountDown] = useState(60);
  if (props.timerStarter) {
    let interval = setInterval(() => {
      if (countDown < 1) {
        clearInterval(interval);
      } else {
        setCountDown((countDown = countDown - 1));
      }
    }, 1000);
  }

  return <div>{countDown}</div>;
};

export default Timer;
