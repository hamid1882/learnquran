import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import "../App.css";

const MiniNav = (props) => {
  let location = useLocation();
  const { id } = useParams();
  const { id2 } = useParams();

  return (
    <ul className="nav sticky-top text-light bg-dark justify-content-center align-items-center">
      <li>
        <Link
          style={{ textDecoration: "none"}}
          className={`link hoverNavItems nav-link ${
            location.pathname === "/" ? "active" : ""
          }`}
          aria-current="page"
          to="/"
        >
          Home
        </Link>
      </li>
      <li className="d-none d-md-block">
        <Link
          className={`link hoverNavItems nav-link  ${
            location.pathname === "/chapters" ||
            location.pathname === `/chapters/${id}`
              ? "active"
              : ""
          }`}
          to="/chapters"
        >
          Chapters
        </Link>
      </li>
      <li className="d-none d-md-block">
        <Link
          className={`link hoverNavItems nav-link ${
            location.pathname === "/echapters" ||
            location.pathname === `/echapters/${id2}`
              ? "active"
              : ""
          }`}
          to="/echapters"
        >
          English Quran
        </Link>
      </li>
      <li className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
          onClick={props.click}
        />
        <label
          className="link hoverNavItems form-check-label"
          htmlFor="flexSwitchCheckDefault"
        >
          {props.text}
        </label>
      </li>
    </ul>
  );
};

export default MiniNav;
