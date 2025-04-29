import { configureStore } from '@reduxjs/toolkit'
import  todoSlice  from './slices/todo/todoSlice'
import  quizSlice  from './slices/quiz/quizSlice'

export const store = configureStore({
  reducer: {
    todo:todoSlice,
    quiz:quizSlice,
  },
})

