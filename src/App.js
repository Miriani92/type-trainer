import Input from "./components/Input";
import Results from "./components/Results";
import Words from "./components/Words";
import { useState } from "react";
import { useSelector } from "react-redux";
function App() {
  const [index, setIndex] = useState(0);
  const { wordsIsupdated } = useSelector((state) => state.words);

  const getCurrentWordIndex = (idx) => {
    setIndex(idx);
    if (wordsIsupdated) {
      setIndex(0);
    }
  };

  return (
    <div>
      <Words ind={index} />
      <Input curInd={getCurrentWordIndex} />
      <Results />
    </div>
  );
}

export default App;
