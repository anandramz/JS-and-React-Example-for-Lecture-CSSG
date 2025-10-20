import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
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

export default Navbar;
