import React from "react";
import { Link } from "react-router-dom";
import "../App.js";

const Navbar = () => {
  const handleTitle = () => {
    document.title = 'LearnQuran - Home'
  }
  return (
    <nav className="navbarBg navbar navbar-expand-lg navbar-light bg-light pb-0">
      <div className="container-fluid">
        <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
          <img
            className="w-25 h-25"
            src="http://pngimg.com/uploads/quran/quran_PNG39.png"
            alt="logo"
          />
          <h2>Learn - Quran</h2>
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
        <div
          className="collapse navbar-collapse px-2 mx-2"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/" onClick={handleTitle}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/tasbih">
                Tasbeeh Counter
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
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
