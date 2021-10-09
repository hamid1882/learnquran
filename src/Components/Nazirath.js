import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import MiniNav from "./MiniNav";
import useDisplayModes from "./useDisplayModes";
import LoadingBar from "react-top-loading-bar";
import Spinner from "./Spinner";
const PAGE_NUMBER = 1;

const Nazirath = () => {
  const [updatedData, setupdatedData] = useState([]);
  const [loading, setloading] = useState(false);
  const [design, handleClick, btnText] = useDisplayModes();
  const [progress, setProgress] = useState(0);
  const [page, setPage ] = useState(PAGE_NUMBER);

  //Getting the id's from chapters Link element
  const { id } = useParams();

  useEffect(() => {
    setProgress(40);
    setloading(true);
    fetch(
      `https://api.quran.com/api/v4/verses/by_chapter/${id}?language=en&words=true&fields=text_uthmani&page=${page}&per_page=10`
    )
      .then((res) => res.json())
      .then(json => setupdatedData([...updatedData, ...json.verses]))
        setloading(false);
        setProgress(100);
        document.title = "Nazirath Quran";
    // eslint-disable-next-line
      }, [page]);


  const scrollToEnd = () => {
    setPage(page + 1);
  }

  window.onscroll = function () {
    //check if the page has scrolled to the bottom of the screen
    if (
      window.innerHeight + document.documentElement.scrollTop
      === document.documentElement.offsetHeight
    ) {
      scrollToEnd()
    }
  }

  return (
    <>
      <LoadingBar
        color="#f11946"
        height={3}
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <div style={design} className="container-fluid p-0 text-center">
        <MiniNav click={handleClick} text={btnText} nightMode={design} />
        {loading ? <Spinner /> : null}
        {!progress === 0 ? progress : null}
          {updatedData.map((verse) => {
            return (
              <div
                style={design}
                className="arabicFont p-3 my-2 border-bottom fs-1"
                key={verse.id}
              >
                {verse.text_uthmani}
                <span className="p-2 mx-2 fs-5 bg-secondary rounded-circle bg-opacity-50">
                  {verse.verse_number < 10
                    ? "0" + verse.verse_number
                    : verse.verse_number}
                </span>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Nazirath;
