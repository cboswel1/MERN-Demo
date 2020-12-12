import React from "react";
import { Link } from "react-router-dom";
import "./Navbarr.css";

const Navbar = () => {
  return (
    <nav className="Navbar">
      <div className="Navbar-brand">
        <span>Todo App</span>
      </div>

      <ul className="Navbar-links">
        <li className="Navbar-links">
          <Link to="/">Homepage</Link>
        </li>

        <li className="Navbar-links">
          <Link to="/todos">View Todos</Link>
        </li>

        <li className="Navbar-links">
          <Link to="/todos/new">Add Todo</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
