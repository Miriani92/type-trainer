import React from "react";
import styles from "./Results.module.css";
import { useSelector } from "react-redux";

const Results = () => {
  const { count } = useSelector((state) => state.words);
  return <div>{count}</div>;
};

export default Results;
