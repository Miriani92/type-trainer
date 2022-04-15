import React from "react";
import styles from "./Results.module.css";
import { useSelector } from "react-redux";

const Results = () => {
  const { countCorrectwords, accuracy, keyStroke, wrongWords } = useSelector(
    (state) => state.words
  );
  return (
    <section className={styles.results}>
      <div>
        <span>Correct Words</span>
        <span>{countCorrectwords}</span>
      </div>
      <div>
        <span>Accuracy</span>
        <span>{accuracy}%</span>
      </div>
      <div>
        <span>Keystroke</span>
        <span>{keyStroke}</span>
      </div>
      <div style={{ border: "none" }}>
        <span>Wrong Words</span>
        <span>{wrongWords}</span>
      </div>
    </section>
  );
};

export default Results;
