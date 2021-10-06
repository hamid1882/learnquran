import React from "react";
import { Link } from "react-router-dom";
import useDisplayModes from "./useDisplayModes";
import useRemoteChapters from "./useRemoteChapters";
import LoadingBar from "react-top-loading-bar";
import "../App.css";

import MiniNav from "./MiniNav";

const Home = () => {
  const [design, handleClick, btnText] = useDisplayModes();
  const [progress, setProgress] = useRemoteChapters();

  return (
    <>
      <LoadingBar
        color="#f11946"
        progress={progress}
        onLoaderFinished={() => setProgress(100)}
      />
      {!progress === 0 ? progress : null}
      <div className="container-fluid" style={design}>
        <MiniNav nightMode={design} click={handleClick} text={btnText} />
        <div className="text-center px-5 mb-5 sm-w-50 sm-h-50">
          <img
            src="https://cdn.qurancdn.com/assets/quran-logo-f5d0f128f5aa2a1949a3157d96bbd04a184e4a4ee0e05d464a3f2ae8d0bdcbdf.png"
            alt="Quran-Caligraphy"
          />
        </div>
        <h1 className="fs-1 text-center">Read Quran</h1>
        <div className="d-flex gap-2 p-2 my-5">
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/chapters"
            className="hoverDiv card"
          >
            <img
              src="https://t4.ftcdn.net/jpg/03/82/95/09/360_F_382950960_H53pJTPQD2wgBRV6otb5DUcyCQP8QGhX.jpg"
              className="img-fluid img-thumbnail"
              alt="..."
            />
            <div className="card-body">
              <p className="card-text">Nazirah Quran</p>
            </div>
          </Link>
          <Link
            onClick={handleClick}
            style={{ textDecoration: "none", color: "black" }}
            to="/echapters"
            className="hoverDiv card"
          >
            <img
              src="https://t4.ftcdn.net/jpg/03/82/95/09/360_F_382950960_H53pJTPQD2wgBRV6otb5DUcyCQP8QGhX.jpg"
              className="img-fluid img-thumbnail"
              alt="..."
            />
            <div className="card-body">
              <p className="card-text">Quran with English Translation</p>
            </div>
          </Link>
          <Link
            onClick={handleClick}
            style={{ textDecoration: "none", color: "black" }}
            to="/tasbih"
            className="hoverDiv card"
          >
            <img
              src="https://t4.ftcdn.net/jpg/03/82/95/09/360_F_382950960_H53pJTPQD2wgBRV6otb5DUcyCQP8QGhX.jpg"
              className="img-fluid img-thumbnail"
              alt="..."
            />
            <div className="card-body">
              <p className="card-text">Tasbih</p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
