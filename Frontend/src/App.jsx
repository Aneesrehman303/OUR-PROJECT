// import { useState } from 'react'
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import About from "./pages/About";
import News from "./pages/News";
// import Lecturers- from "./pages/Lecturers";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Lecturers from "./pages/Lecturers";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/register" element={<Signup />}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/About" element={<About/>}></Route>
        <Route path="/News" element={<News/>}></Route>
        <Route path="/Lecturers" element={<Lecturers/>}></Route>

        

        

      </Routes>
    </BrowserRouter>
  );
}

export default App;
