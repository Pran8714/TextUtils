import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav
      className="navbar navbar-expand-lg fixed-top bg-body-tertiary "
      data-bs-theme={`${props.mode}`}
      
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/about">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/About">
                {props.text}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                Textform
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div
        className={`form-check form-switch mx-5 text-${
          props.mode === "light" ? "Dark" : "light"
        }`}
      >
        <input
          className="form-check-input"
          onClick={props.toggleMode}
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
        />
        <label className="form-check-label" htmlfor="flexSwitchCheckDefault">
          {" "}
          {`${props.mode}`} mode on
        </label>
      </div>
    </nav>
  );
}


