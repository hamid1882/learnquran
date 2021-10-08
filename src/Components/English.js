import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import MiniNav from "./MiniNav";
import useDisplayModes from "./useDisplayModes";
import LoadingBar from "react-top-loading-bar";
import Spinner from "./Spinner";
const PAGE_NUMBER = 1;

const English = () => {
  const [data, setData] = useState([]);
  const [loading, setloading] = useState(false);
  const [design, handleClick, btnText] = useDisplayModes();
  const [progress, setProgress] = useState(0);
  const [page, setPage] = useState(PAGE_NUMBER);
  const [error, seterror] = useState('')

  //Getting the id's from chapters Link element
  const { id2 } = useParams();

  useEffect(() => {
    setProgress(40);
    setloading(true);
    fetch(
      `https://api.quran.com/api/v4/verses/by_chapter/${id2}?language=en&words=true&fields=text_uthmani&page=${page}&per_page=10`
    )
      .then((res) => res.json())
      .then(json => setData([...data, ...json.verses]))
        setloading(false);
        setProgress(100);
        document.title = "Quran English Translation";
        // eslint-disable-next-line
      },[page]);

  const scrollToEnd = () => {
    setPage(page + 1);
  };

  window.onscroll = function () {
    //check if the page has scrolled to the bottom of the screen
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      scrollToEnd();
    }
  };

  return (
    <>
      <LoadingBar
        color="#f11946"
        height={3}
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <div style={design} className="container-fluid text-center my-4">
        <MiniNav nightMode={design} click={handleClick} text={btnText} />
        {loading ? <Spinner /> : null}
        {!progress === 0 ? progress : null}
        <h1>{error}</h1>
        {data.map((verse) => {
          return (
            <div
              style={design}
              className="arabicFont p-2 my-1 border-bottom fs-1 py-4"
              key={verse.id}
            >
              {verse.text_uthmani}
              <span className="p-2 fs-5 bg-secondary rounded-circle bg-opacity-50 mx-3">
                {verse.verse_number < 10
                  ? "0" + verse.verse_number
                  : verse.verse_number}
              </span>
              <div className="p-2 mt-5">
                {verse.words.map((word) => word.translation.text).join(" ")}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default English;
