import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { TodoList } from "./components/TodoList";
import { FormDataTodo } from "./components/Todolist/formDataTodo";
import { QuizApp } from "./components/QuizApp/QuizApp";
import { AddUser } from "./components/AddUser/AddUser";

function App() {

  return (
    <>
    {/* <TodoList/> */}
    {/* <FormDataTodo /> */}
    {/* <QuizApp /> */}
    <AddUser/>
    </>
  );
}

export default App;
