import React, { useRef } from "react";
import styles from "./Input.module.css";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { wordAction } from "../Store/Slice";

const Input = (props) => {
  const inputRef = useRef();
  const [word, setWord] = useState("");
  const [indexforCompare, setIndexForCompare] = useState(1);
  const dispatch = useDispatch();

  const submitWord = (e) => {
    if (e.keyCode == 32) {
      setIndexForCompare(indexforCompare + 1);
      props.curInd(indexforCompare);
      setWord("");
    }
    if (indexforCompare >= 21) {
      setIndexForCompare(1);
    }
  };

  useEffect(() => {
    let unMount = true;
    if (unMount) {
      dispatch(wordAction.compare({ word, indexforCompare }));
      inputRef.current.focus();
    }
    return () => (unMount = false);
  }, [word]);

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
    </div>
  );
};

export default Input;
