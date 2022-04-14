import React, { useRef } from "react";
import Timer from "./Timer";
import styles from "./Input.module.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { wordAction } from "../Store/Slice";

const Input = (props) => {
  const [start, setStart] = useState(false);
  const inputRef = useRef();
  const [word, setWord] = useState("");
  const [indexforCompare, setIndexForCompare] = useState(0);
  const { wordsIsupdated } = useSelector((state) => state.words);
  const dispatch = useDispatch();

  useEffect(() => {
    let unMount = true;
    if (unMount) {
      dispatch(wordAction.compare({ word, indexforCompare }));
      inputRef.current.focus();
    }
    if (wordsIsupdated && inputRef.current.value !== "") {
      dispatch(wordAction.startAfterReset());
      setIndexForCompare(0);
      setWord("");
    } else {
      props.curInd(indexforCompare);
    }
    if (inputRef.current.value !== "") {
      setStart(true);
    }
    return () => (unMount = false);
  }, [word, wordsIsupdated]);

  const submitWord = (e) => {
    if (e.keyCode === 32) {
      dispatch(wordAction.totalSubmission());
      setIndexForCompare(indexforCompare + 1);
      props.curInd(indexforCompare);
      setWord("");
    }
    if (indexforCompare === 20) {
      setIndexForCompare(0);
    }
  };

  const reset = (arg) => {
    setStart(arg);
    setWord("");
    dispatch(wordAction.reset());
  };
  let dis = (
    <div>
      <span>60</span>
      <button>reset</button>
    </div>
  );
  return (
    <div className={styles.input}>
      <form>
        <input
          type="text"
          id="word"
          value={word}
          onChange={(e) => setWord(e.target.value)}
          ref={inputRef}
          onKeyDown={submitWord}
        />
      </form>
      {start ? <Timer timerStarter={start} reset={reset} /> : dis}
    </div>
  );
};

export default React.memo(Input);
