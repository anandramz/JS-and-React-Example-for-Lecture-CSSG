import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Profile from "./components/Profile";
import Home from "./components/Home";
import Navbar from "./components/Navbar";


function App() {
  return (
    <div className="app-layout">
      <Navbar />
      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;




