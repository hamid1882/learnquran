import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router";
import LoadingBar from "react-top-loading-bar";
import Spinner from "./Spinner";
import themeContext from "./Context/themeContext";
import InfiniteScroll from "react-infinite-scroll-component";

const PAGE_NUMBER = 1;

const English = () => {
  const [data, setData] = useState([]);
  const [loading, setloading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [page, setPage] = useState(PAGE_NUMBER);
  const design = useContext(themeContext);
  //Getting the id's from chapters Link element
  const { id2 } = useParams();

  useEffect(() => {
    setProgress(40);
    setloading(true);
    fetch(
      `https://api.quran.com/api/v4/verses/by_chapter/${id2}?language=en&words=true&fields=text_uthmani&page=${page}&per_page=10`
    )
      .then((res) => res.json())
      .then((json) => setData([...data, ...json.verses]));
    setloading(false);
    setProgress(100);
    document.title = "Quran English Translation";
    // eslint-disable-next-line
  }, [page]);

  const fetchMoreData = () => {
    setPage(page + 1);
  };

  return (
    <>
      <LoadingBar
        color="#f11946"
        height={3}
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <div style={design} className="container-fluid text-center p-0">
        {loading ? <Spinner /> : null}
        {!progress === 0 ? progress : null}
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
      <InfiniteScroll
        dataLength={data.length}
        next={fetchMoreData}
        hasMore={true}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Sadaqallahulazeem</b>
          </p>
        }
        loader={<Spinner />}
      ></InfiniteScroll>
    </>
  );
};

export default English;
