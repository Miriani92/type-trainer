import { createSlice } from "@reduxjs/toolkit";
import { words } from "./Wordstore";

const generateWords = () => {
  const initialWords = [];
  for (let i = 0; i < 20; i++) {
    initialWords.push(words[Math.floor(Math.random() * 109)]);
  }
  return initialWords;
};

const initialState = {
  allWords: generateWords(),
  isTrue: false,
  wordsIsupdated: false,
  count: 0,
};
const wordSlice = createSlice({
  name: "input",
  initialState,
  reducers: {
    compare(state, action) {
      const index = action.payload.indexforCompare;
      const currentWord = action.payload.word;
      if (index === 20) {
        state.allWords = generateWords();
      }
      if (state.allWords[index] === currentWord.trim()) {
        state.isTrue = true;
        state.count += 1;
      } else {
        state.isTrue = false;
      }
      console.log(state.count);
    },
    reset(state) {
      state.wordsIsupdated = true;
      state.allWords = generateWords();
      state.count = 0;
    },
    startAfterReset(state) {
      state.wordsIsupdated = false;
    },
  },
});

export const wordAction = wordSlice.actions;

export default wordSlice.reducer;
