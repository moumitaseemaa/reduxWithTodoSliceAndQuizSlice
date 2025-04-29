import React from "react";
import { Routes, Route } from "react-router";
import Common from "./components/Common";
// import Todo from "./components/Todo";
import Quiz from "./components/Quiz";
const App = () => {
  return (
    <>
      <Routes>
        <Route element={<Common />}>
          {/* <Route index element={<Todo/>} /> */}
          <Route index element={<Quiz/>} />
          {/* <Route path="quiz" element={<Quiz />} /> */}
        </Route>
      </Routes>
    </>
  );
};

export default App;
