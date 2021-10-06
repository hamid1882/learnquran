
import useRemoteChapters from './useRemoteChapters'
import { Link } from "react-router-dom";
import useDisplayModes from './useDisplayModes';


const EChapters = () => {
  const [loading, data, MiniNav] = useRemoteChapters('https://api.quran.com/api/v4/chapters?language=en', (data) => data.chapters)

  const [design, handleClick, btnText] = useDisplayModes();

  return (
    <div style={design} className="container-fluid mx-auto row gap-3 justify-content-center align-items-center">
      <MiniNav nightMode={design} click={handleClick} text={btnText}/>
      {loading ? "loading" : null}
      {data.map((item) => {
        return (
          <div className="col col-md-4 col-lg-3  border border-success rounded text-center my-3" style={{cursor: 'pointer'}}>
            <Link to={`/echapters/${item.id}`} style={design} className="d-flex p-2  rounded justify-content-evenly align-items-center" key={item.id}>
              <div className="bg-secondary bg-opacity-50 p-2 rounded-circle">{item.id < 10 ? ('0' + item.id) : item.id}  </div>
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
  );
};

export default EChapters;
