import { useState, useEffect } from 'react';
import MiniNav from './MiniNav';

export default function useRemoteData(url, transform = () => { }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    setLoading(true)
    fetch(url)
      .then(response => response.json())
      .then(res => {
        const file = transform(res)
        setData(file)
        setLoading(false)
      })
      .catch((error) => { throw (error) })
      // eslint-disable-next-line
  }, [])

  return [loading, data, MiniNav]
}