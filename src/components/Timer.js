import React, { useState, useEffect, Fragment } from "react";
import styles from "./Timer.module.css";

const Timer = (props) => {
  let [countDown, setCountDown] = useState(60);
  let start = props.timerStarter;
  let minute = 60;
  useEffect(() => {
    let interval;
    if (start) {
      interval = setInterval(() => {
        if (minute === 0) {
          clearInterval(interval);
        }
        setCountDown(minute--);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [start]);

  return (
    <Fragment>
      <div>{countDown}</div>
      <button onClick={() => props.reset(false)}></button>
    </Fragment>
  );
};

export default React.memo(Timer);
