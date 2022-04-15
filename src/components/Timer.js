import React, { useState, useEffect, Fragment } from "react";
import styles from "./Timer.module.css";
import { useDispatch } from "react-redux";
import { wordAction } from "../Store/Slice";
import svgRestart from "../image/restart.svg";

const Timer = (props) => {
  let [countDown, setCountDown] = useState(60);
  const dispatch = useDispatch();
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
  useEffect(() => {
    if (countDown < 1) {
      dispatch(wordAction.stopExecution());
    }
  }, [countDown]);

  return (
    <Fragment>
      <div className={styles.timer}>{countDown}</div>
      <button onClick={() => props.reset(false)} className={styles.button}>
        <img src={svgRestart}></img>
      </button>
    </Fragment>
  );
};

export default Timer;
