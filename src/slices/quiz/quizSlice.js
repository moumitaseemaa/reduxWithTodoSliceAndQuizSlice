import { createSlice } from "@reduxjs/toolkit";
import { questions } from "../../data/question";

const initialState = {
  questions: questions,
  currentQuestionIndex: 0,
  score: 0,
  quizIsOver: false,
};

export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    submitAnswer: (state,action) => {
      const currentQuestion = state.questions[state.currentQuestionIndex]
      if(action.payload === currentQuestion.correctAnswer){
        state.score++
      }      

      if(state.currentQuestionIndex === state.questions.length-1){
        state.quizIsOver = true
      }else{
        state.currentQuestionIndex ++
      }
    },
  },
});

export const { submitAnswer } = quizSlice.actions;

export default quizSlice.reducer;
