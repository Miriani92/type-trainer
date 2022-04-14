import React from "react";
import styles from "./Results.module.css";
import { useSelector } from "react-redux";

const Results = () => {
  const { countCorrectwords } = useSelector((state) => state.words);
  return <div>{countCorrectwords}</div>;
};

export default Results;
