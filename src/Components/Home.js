import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useDisplayModes from "./useDisplayModes";
import useRemoteChapters from "./useRemoteChapters";
import LoadingBar from "react-top-loading-bar";
import themeContext from "./Context/themeContext";
import "../App.css";

const Home = () => {
  const [handleClick] = useDisplayModes();
  const [progress, setProgress] = useRemoteChapters();
  const design = useContext(themeContext);

  return (
    <>
      <LoadingBar
        color="#f11946"
        progress={progress}
        onLoaderFinished={() => setProgress(100)}
      />
      {!progress === 0 ? progress : null}
      <div className="container-fluid p-0 " style={design}>
        <div className="text-center px-5 my-5">
          <img
            src="https://cdn.qurancdn.com/assets/quran-logo-f5d0f128f5aa2a1949a3157d96bbd04a184e4a4ee0e05d464a3f2ae8d0bdcbdf.png"
            alt="Quran-Caligraphy"
            className="img-fluid"
          />
        </div>
        <h1 className="fs-1 text-center">Read Quran</h1>
        <div className="h-100 fonts container fs-5 d-flex flex-column flex-md-row gap-4 p-2 my-5 justify-content-center">
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/chapters"
            className="col hoverDiv card border-0 shadow overflow-hidden my-5"
          >
            <img
              src="https://i.pinimg.com/originals/95/5c/ba/955cba88c7299605f438f34d44b45860.jpg"
              alt="..."
              className="h-75"
            />
            <div className="card-body d-flex align-items-center justify-content-center">
              <p className="card-text">Nazirah Quran</p>
            </div>
          </Link>
          <Link
            onClick={handleClick}
            style={{ textDecoration: "none", color: "black" }}
            to="/echapters"
            className="col hoverDiv card border-0 shadow overflow-hidden my-5"
          >
            <img
              src="https://media.gettyimages.com/videos/islamic-concept-the-holy-al-quran-with-written-arabic-calligraphy-of-video-id1336011337?s=640x640"
              alt="..."
              className="h-75"
            />
            <div className="card-body d-flex align-items-center justify-content-center">
              <p className="card-text">English Translation</p>
            </div>
          </Link>
          <Link
            onClick={handleClick}
            style={{ textDecoration: "none", color: "black" }}
            to="/tasbih"
            className="col hoverDiv card border-0 shadow overflow-hidden my-5"
          >
            <img
              src="https://t4.ftcdn.net/jpg/02/55/89/27/360_F_255892725_PoBXNVXs0EEOEY8LKsmuNr9EpaAMIuJX.jpg"
              alt="..."
              className="h-75"
            />
            <div className="card-body d-flex align-items-center justify-content-center">
              <p className="card-text ">Tasbih</p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
