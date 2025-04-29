import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
  inValue: "",
  active: false,
  updateIndex : null
};

export const todoSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    inputValue: (state, action) => {
      state.inValue = action.payload;
    },

    addTodo: (state) => {
      state.value.push( state.inValue);
      state.inValue = " "      
    },

    deleteTodo: (state, action) => {
      state.value.splice(action.payload, 1);
    },

    editTodo: (state, action) => {
      state.updateIndex = action.payload
      state.inValue = state.value[ action.payload]
      state.active = true
    },
    
    addUpdate:(state)=>{
      state.value[state.updateIndex] = state.inValue 
      state.active = false
      state.inValue = ""
    }
  },
});

export const { inputValue, addTodo, deleteTodo, editTodo,addUpdate } = todoSlice.actions;

export default todoSlice.reducer;
