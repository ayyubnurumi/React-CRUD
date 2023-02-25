import React from "react";
import { Link, Outlet } from "react-router-dom";

// styles
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

function Navbar({ navbar, resetNavbar }) {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <Link
          to={"/"}
          onClick={() => resetNavbar(0)}
          className="navbar-brand mx-5"
        >
          React CRUD Operations
        </Link>
        {navbar === 1 ? (
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/read"} className="nav-link">
                Read
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/create"} className="nav-link">
                Create
              </Link>
            </li>
          </div>
        ) : navbar === 2 ? (
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/tutorials"} className="nav-link">
                Tutorials
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Add
              </Link>
            </li>
          </div>
        ) : null}
      </nav>

      <div className="container mt-5">
        <Outlet />
      </div>
    </div>
  );
}

export default Navbar;
