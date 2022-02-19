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
          style={{ textDecoration: "none" }}
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
      <div className="d-flex gap-2 mt-3 align-items-center ">
        <p onClick={props.handleClick} className="text-white">
          {props.btnText}
        </p>
      </div>
    </ul>
  );
};

export default MiniNav;
