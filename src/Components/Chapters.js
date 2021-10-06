import useRemoteChapters from "./useRemoteChapters";
import { Link } from "react-router-dom";
import useDisplayModes from "./useDisplayModes";
import { useState } from "react";

const Chapters = () => {
  const [loading, data, MiniNav] = useRemoteChapters(
    "https://api.quran.com/api/v4/chapters?language=en",
    (data) => data.chapters
  );
  const [design, handleClick, btnText] = useDisplayModes();
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  return (
    <>
      <MiniNav nightMode={design} click={handleClick} text={btnText} />
      <div style={design} className="d-flex justify-content-center">
        <form style={design} className="d-flex w-50 p-2 my-2">
          <input
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
        className="container-fluid mx-auto row gap-3 justify-content-center align-items-center"
      >
        {loading ? "loading" : null}
        {data.filter((val) => {
            if (search === "") {
              return val;
            }
            if (val.name_simple.toLowerCase().includes(search.toLowerCase())) {
              return val;
            }
          })
          .map((item) => {
            return (
              <div
                className="col col-md-4 col-lg-3 border border-success rounded text-center my-3 "
                style={{ cursor: "pointer" }}
              >
                <Link
                  to={`/chapters/${item.id}`}
                  style={design}
                  className="d-flex p-2 rounded justify-content-evenly align-items-center"
                  key={item.id}
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
