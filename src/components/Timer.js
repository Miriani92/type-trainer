import React, { useState, useEffect, Fragment } from "react";
import styles from "./Timer.module.css";
import { useDispatch } from "react-redux";
import { wordAction } from "../Store/Slice";

const Timer = (props) => {
  let [countDown, setCountDown] = useState(60);
  const dispatch = useDispatch();
  let start = props.timerStarter;
  let minute = 5;

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
  useEffect(() => {
    if (countDown < 1) {
      dispatch(wordAction.stopExecution());
    }
  }, [countDown]);

  return (
    <Fragment>
      <div>{countDown}</div>
      <button onClick={() => props.reset(false)}></button>
    </Fragment>
  );
};

export default Timer;
