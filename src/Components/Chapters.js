import useRemoteChapters from "./useRemoteChapters";
import { Link } from "react-router-dom";
import useDisplayModes from "./useDisplayModes";
import { useState, useRef, useEffect } from "react";
import LoadingBar from "react-top-loading-bar";
import Spinner from './Spinner';
import "../App.css";

const Chapters = () => {
  const [loading, data, MiniNav, progress, setProgress, handleLoad] =
    useRemoteChapters(
      "https://api.quran.com/api/v4/chapters?language=en",
      (data) => data.chapters
    );
  const [design, handleClick, btnText] = useDisplayModes();
  const [search, setSearch] = useState("");

  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  const handleChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const filteredData = data.filter(item => item.name_simple.toLowerCase().includes(search.toLowerCase()))

  return (
    <>
      <LoadingBar
        color="#f11946"
        height={3}
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <MiniNav nightMode={design} click={handleClick} text={btnText} />
      <div style={design} className="d-flex justify-content-center">
        <form style={design} className="d-flex w-50 p-2 my-2">
          <input
            ref={inputRef}
            value={search}
            className="form-control me-2"
            type="text"
            placeholder="Ar - Rahman"
            aria-label="Search"
            onChange={handleChange}
          />
        </form>
      </div>
      <div
        style={design}
        className="container-fluid text-center mx-auto row gap-3 justify-content-center align-items-center"
      >
        {loading ? <Spinner /> : null}
        {filteredData.map((item) => {
            return (
              <div
                className="hoverSmallDiv col col-md-4 col-lg-3 border border-success rounded text-center my-3 "
                style={{ cursor: "pointer" }}
                key={item.id}
              >
                <Link
                  to={`/chapters/${item.id}`}
                  style={design}
                  className="d-flex p-2 rounded justify-content-evenly align-items-center"
                  
                  onClick={handleLoad}
                >
                  <div className="bg-secondary bg-opacity-50 p-2 rounded-circle">
                    {item.id < 10 ? "0" + item.id : item.id}
                  </div>
                  <div className="row text-center">
                    <div className="fs-5"> {item.name_simple} </div>
                    <div> {item.revelation_place} </div>
                  </div>
                  <div className="text-success"> {item.name_arabic} </div>
                </Link>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Chapters;
