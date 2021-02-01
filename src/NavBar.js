import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="navBar">
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
              <NavLink className="navbar-brand" to="/">
                AMIVIN
                <small>
                  <p>Global Export</p>
                </small>
              </NavLink>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div
                className="collapse navbar-collapse navbar__titles"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <NavLink
                      className="nav-link active"
                      activeClassName="mode_active"
                      to="/"
                    >
                      Home <span className="sr-only">(current)</span>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="">
                      About
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="">
                      Description
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="">
                      Material
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="">
                      About Amivin
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="">
                      Our Services
                    </NavLink>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
