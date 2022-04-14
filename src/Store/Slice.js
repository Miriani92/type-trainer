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
  countCorrectwords: 0,
  keyStroke: -2,
  allSubmission: 0,
  accuracy: 0,
  wrongWords: 0,
};
const wordSlice = createSlice({
  name: "input",
  initialState,
  reducers: {
    compare(state, action) {
      const index = action.payload.indexforCompare;
      const currentWord = action.payload.word;
      state.keyStroke += 1;
      if (index === 20) {
        state.allWords = generateWords();
      }
      if (state.allWords[index] === currentWord.trim()) {
        state.keyStroke -= 1;
        state.isTrue = true;
        state.countCorrectwords += 1;
      } else {
        state.isTrue = false;
      }
    },
    reset(state) {
      state.wordsIsupdated = true;
      state.allWords = generateWords();
      state.countCorrectwords = 0;
    },
    startAfterReset(state) {
      state.wordsIsupdated = false;
    },
    totalSubmission(state) {
      state.allSubmission += 1;
      state.accuracy = Math.round(
        (state.countCorrectwords / state.allSubmission) * 100
      );
      state.wrongWords = state.allSubmission - state.countCorrectwords;

      console.log(console.log(state.wrongWords));
    },
  },
});

export const wordAction = wordSlice.actions;

export default wordSlice.reducer;
