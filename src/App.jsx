import { useState } from "react";
import { Route, Routes, Navigate, Form } from "react-router-dom";
import Header from "./componentes/Header.jsx";
import Home from "./Paginas/Home.jsx";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
