import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container">
      <div className="text-center px-5 my-5 sm-w-50 sm-h-50">
        <img src="https://cdn.qurancdn.com/assets/quran-logo-f5d0f128f5aa2a1949a3157d96bbd04a184e4a4ee0e05d464a3f2ae8d0bdcbdf.png" alt="Quran-Caligraphy" />
      </div>
      <h1 className="fs-1 text-center">Read Quran</h1>
      <div className="d-flex row align-items-center justify-content-evenly gap-2 p-2 my-5">
        <Link style={{textDecoration: "none", color: 'black'}} to="/chapters" className="card w-25 h-25">
          <img
            src="https://t4.ftcdn.net/jpg/03/82/95/09/360_F_382950960_H53pJTPQD2wgBRV6otb5DUcyCQP8QGhX.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <p className="card-text">Nazirah Quran</p>
          </div>
        </Link>
        <Link style={{textDecoration: "none", color: 'black'}} to="/echapters" className="card w-25 h-25">
          <img
            src="https://t4.ftcdn.net/jpg/03/82/95/09/360_F_382950960_H53pJTPQD2wgBRV6otb5DUcyCQP8QGhX.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <p className="card-text">Quran with English Translation</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
