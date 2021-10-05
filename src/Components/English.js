import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

const English = () => {
  const [data, setData] = useState([]);
  const [loading, setloading] = useState(false);

  //Getting the id's from chapters Link element
  const { id2 } = useParams();

  useEffect(() => {
    setloading(true);
    fetch(
      `https://api.quran.com/api/v4/verses/by_chapter/${id2}?language=en&words=true&fields=text_uthmani&page=1&per_page=50`
    )
      .then((res) => res.json())
      .then((data) => {
        const newData = data.verses;
        setData(newData);
        setloading(false);
      });
    // eslint-disable-next-line
  }, []);

  return (
    <div className="container text-center p-5 my-4">
      {loading ? "loading" : null}
      {data.map((verse) => {
        return (
          <div className="p-2 my-1 border-bottom fs-1 py-4" key={verse.id}>
            {verse.text_uthmani}
            <span className="p-2 fs-5 bg-secondary rounded-circle bg-opacity-50 mx-3">
              {verse.verse_number}
            </span>
            <div className="p-2 mt-5">{verse.words.map(word => word.translation.text).join(' ')}</div>
          </div>
        );
      })}
    </div>
  );
};

export default English;
