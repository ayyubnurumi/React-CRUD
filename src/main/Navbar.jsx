import React from "react";
import { Link, Outlet } from "react-router-dom";

// styles
import "bootstrap/dist/css/bootstrap.min.css";

function Navbar({ navbar, resetNavbar }) {
  return (
    <>
      <nav className="navbar navbar-expand-sm bg-body-tertiary">
        <div className="container-fluid">
          <Link
            to={"/"}
            onClick={() => resetNavbar(0)}
            className="navbar-brand ms-3"
          >
            React CRUD Operations
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="true"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-lg-0">
              {navbar === 1 ? (
                <>
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
                </>
              ) : navbar === 2 ? (
                <>
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
                </>
              ) : null}
            </ul>
          </div>
        </div>
      </nav>

      <div className="container mt-5">
        <Outlet />
      </div>
    </>
  );
}

export default Navbar;
