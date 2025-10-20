import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Profile from "./components/Profile";
import Home from "./components/Home";

function Nav() {
  return (
    <aside className="sidebar">
      <div className="brand"> </div>
      <ul className="nav-list">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/profile">Profile</Link></li>
      </ul>
    </aside>
  );
}

function App() {
  return (
    <div className="app-layout">
      <Nav />
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




