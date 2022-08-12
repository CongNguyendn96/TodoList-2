import React from "react";
import Header from "./layout/Header";
import Sidebar from "./layout/Sidebar";
import { Routes, Route } from "react-router-dom";
import Form from "./components/Form/index";
import Content from "./layout/Content";
function App() {
  return (
    <div>
      <Header />
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div>
          <Routes>
            <Route path="/" element={<Content />} />
            <Route path="/add" element={<Form />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
