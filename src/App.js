import React from "react";
import Header from "./layout/Header";
import Sidebar from "./layout/Sidebar";
import { Routes, Route } from "react-router-dom";
import Form from "./components/Form/index";
import TodoList from "./components/TodoList";
function App() {
  return (
    <div>
      <Header />
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div>
          <Routes>
            <Route path="/" element={<TodoList />}></Route>
            <Route path="/add" element={<Form />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
