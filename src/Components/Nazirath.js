import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router';
import MiniNav from './MiniNav';
import useDisplayModes from './useDisplayModes';

const Nazirath = () => {
  const [data, setData] = useState([]);
  const [loading, setloading] = useState(false);
  const [design, handleClick, btnText] = useDisplayModes();
 
  //Getting the id's from chapters Link element
  const { id } = useParams();

  useEffect(() =>{
    setloading(true)
    fetch(`https://api.quran.com/api/v4/verses/by_chapter/${id}?language=en&words=true&fields=text_uthmani&page=1&per_page=50`)
         .then(res => res.json())
         .then(data => {
           const newData = data.verses;
           setData(newData)
           setloading(false)
         })
         // eslint-disable-next-line
  }, [])

  return (
    <div style={design} className="container-fluid text-center my-2">
      <MiniNav click={handleClick} text={btnText} nightMode={design} />
      {loading ? 'loading': null}
      {data.map(verse => {
        return <div style={design} className="p-2 my-1 border-bottom fs-1" key={verse.id}>{verse.text_uthmani} <span className="p-2 fs-5 bg-secondary rounded-circle bg-opacity-50">{verse.verse_number < 10 ? '0' + (verse.verse_number) : verse.verse_number}</span></div>
      })}
    </div>
  )
}

export default Nazirath
