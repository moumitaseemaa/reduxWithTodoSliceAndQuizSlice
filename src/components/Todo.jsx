import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {inputValue, addTodo, deleteTodo,editTodo, addUpdate  } from "../slices/todo/todoSlice";

const Todo = () => {
  const todo = useSelector((state) => state.todo.value);
  const todo1 = useSelector((state) => state.todo.inValue);
  const active = useSelector(state => state.todo.active )

  const dispatch = useDispatch()

  return (
    <section className=" w-[100%] h-[100vh] bg-purple-400 flex flex-col justify-center items-center ">
      <h1 className="text-2xl mb-4">Todo List with React & Redux</h1>
      <div className="py-8 px-8 bg-white border-[3px]  border-black  rounded-3xl">
        <input
          onChange={(e)=>dispatch(inputValue(e.target.value))}
          value={todo1}
          type="text"
          placeholder="Enter Your Todo"
          className="btn mr-2 placeholder:text-lg placeholder:text-[black]"
        />
        {
          active 
          ?         
          <button onClick={()=>dispatch(addUpdate())} className="btn">update</button>
          : 
          <button onClick={()=>dispatch(addTodo(todo1))} className="btn">Add</button>
        }
        <ul className="mt-4">
          {todo.map( (item,index) => (
            <li key={index}>{index+1} . {item} 
            <button className="subBtn mx-2"  onClick={()=>dispatch(editTodo(index))}>Edit</button>
            <button className="subBtn"  onClick={()=>dispatch(deleteTodo(index))}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Todo;
