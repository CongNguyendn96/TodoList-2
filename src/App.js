import React from "react";
import logo from "./logo.svg";
import TodoList from "./components/TodoList";
import Header from "./layout/Header";
import Sidebar from "./layout/Sidebar";
import Pagination from "./components/Pagination";
function App() {
  return (
    <div>
      <Header />
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div style={{ backgroundColor: "#d6d5e8" }}>
          <TodoList />
          <Pagination />
        </div>
      </div>
    </div>
  );
}

export default App;
