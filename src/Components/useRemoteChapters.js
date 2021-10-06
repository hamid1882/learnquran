import { useState, useEffect } from "react";
import MiniNav from "./MiniNav";

export default function useRemoteData(url, transform = () => {}) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(10);

  useEffect(() => {
    setLoading(true);
    setProgress(40)
    fetch(url)
      .then((response) => response.json())
      .then((res) => {
        const file = transform(res);
        setData(file);
        setLoading(false);
        setProgress(100)
      })
      .catch((error) => {
        throw error;
      });
    // eslint-disable-next-line
  }, []);

  const handleLoad = () => {
    setProgress(50)
  }

  return [loading, data, MiniNav, progress, setProgress, handleLoad];
}
