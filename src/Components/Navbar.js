import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../App.css";

const Navbar = () => {
  const handleTitle = () => {
    document.title = "LearnQuran - Home";
  };
  let location = useLocation();

  return (
    <nav className="navbarBg navbar navbar-expand-lg navbar-light p-0">
      <div className="container-fluid p-2 p-md-1">
        <Link
          className="navbar-brand p-0 d-flex align-items-center gap-2"
          to="/"
        >
          <img
            className="w-25 h-25 d-none d-md-block"
            src="http://pngimg.com/uploads/quran/quran_PNG39.png"
            alt="logo"
          />
          <h2>Learn - Quran</h2>
        </Link>
        <button
          className="navbar-toggler shadow-none border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse px-2 mx-2"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/" ? "active" : ""
                }`}
                aria-current="page"
                to="/"
                onClick={handleTitle}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/tasbih" ? "active" : ""
                }`}
                to="/tasbih"
              >
                Tasbeeh Counter
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/about" ? "active" : ""
                }`}
                to="/about"
              >
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
