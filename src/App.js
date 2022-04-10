import Input from "./components/Input";
import { Provider } from "react-redux";
import store from "./Store/Store";
import Words from "./components/Words";
import { useState } from "react";
function App() {
  const [index, setIndex] = useState(0);

  const getCurrentWordIndex = (ind) => {
    setIndex(ind);
  };

  return (
    <Provider store={store}>
      <div>
        <Words ind={index} />
        <Input curInd={getCurrentWordIndex} />
      </div>
    </Provider>
  );
}

export default App;
