import React, { useState, useEffect } from "react";
import styles from "./Words.module.css";
import { useSelector } from "react-redux";

const Words = (props) => {
  const [ind, setInd] = useState(0);
  const { allWords, isTrue } = useSelector((state) => state.words);
  useEffect(() => {
    if (props.ind === 20) {
      setInd(0);
    } else {
      setInd(props.ind);
    }
  }, [props.ind]);

  return (
    <div className={styles.spanwrapper}>
      {allWords.map((word, index) => {
        return (
          <span
            key={index}
            className={` ${
              index === ind && !isTrue
                ? "add"
                : index === ind && isTrue
                ? "success"
                : ""
            }`}
          >
            {" "}
            {word}{" "}
          </span>
        );
      })}
    </div>
  );
};

export default Words;
