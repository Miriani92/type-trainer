import Input from "./components/Input";
import Results from "./components/Results";
import Words from "./components/Words";
import { useState } from "react";
import { useSelector } from "react-redux";
import Header from "./components/Header";
function App() {
  const [index, setIndex] = useState(0);
  const { wordsIsupdated, stopExecute } = useSelector((state) => state.words);

  const getCurrentWordIndex = (idx) => {
    setIndex(idx);
    if (wordsIsupdated) {
      setIndex(0);
    }
  };
  const reload = () => {
    window.location.reload(true);
  };

  return (
    <div className="holeAppwrapper">
      <Header />
      {stopExecute ? (
        <div className="resultsWrapper">
          <Results />
          <button onClick={reload} className="relodbutton">
            Reload
          </button>
        </div>
      ) : (
        <div>
          <Words ind={index} />
          <Input curInd={getCurrentWordIndex} />
        </div>
      )}
    </div>
  );
}

export default App;
