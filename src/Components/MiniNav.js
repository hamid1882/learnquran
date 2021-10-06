import React from "react";
import { Link } from "react-router-dom";

const MiniNav = (props) => {
  return (
    <ul style={props.nightMode} className="nav sticky-top bg-opacity-50 align-items-center justify-content-between">
      <li className="nav-item">
        <Link
          style={props.nightMode}
          className="nav-link active"
          aria-current="page"
          to="/"
        >
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          style={props.nightMode}
          className="nav-link"
          to="/chapters"
        >
          Chapters
        </Link>
      </li>
      <li className="nav-item">
        <Link
          style={props.nightMode}
          className="nav-link"
          to="/echapters"
        >
          English Quran
        </Link>
      </li>
      <div className="form-check form-switch px-2">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
          onClick={props.click}
        />
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
          {props.text}
        </label>
      </div>
    </ul>
  );
};

export default MiniNav;
