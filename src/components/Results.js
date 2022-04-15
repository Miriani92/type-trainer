import React from "react";
import styles from "./Results.module.css";
import { useSelector } from "react-redux";

const Results = () => {
  const { countCorrectwords, accuracy, keyStroke, wrongWords } = useSelector(
    (state) => state.words
  );
  return (
    <div>
      <p>{countCorrectwords}</p>
      <p>{accuracy}</p>
      <p>{keyStroke}</p>
      <p>{wrongWords}</p>
    </div>
  );
};

export default Results;
