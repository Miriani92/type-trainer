import { createSlice } from "@reduxjs/toolkit";
import { words } from "./Wordstore";

const generateWords = () => {
  const initialWords = [];
  for (let i = 0; i < 20; i++) {
    initialWords.push(words[Math.floor(Math.random() * 109)]);
  }
  return initialWords;
};

const initialState = { allWords: generateWords(), isTrue: false };
const wordSlice = createSlice({
  name: "input",
  initialState,
  reducers: {
    compare(state, action) {
      const index = action.payload.indexforCompare;
      const currentWord = action.payload.word;
      if (index == 21) {
        state.allWords = generateWords();
      }
      console.log(index);
      if (state.allWords[index - 1] == currentWord.trim()) {
        state.isTrue = true;
      } else {
        state.isTrue = false;
      }
    },
  },
});

export const wordAction = wordSlice.actions;

export default wordSlice.reducer;
