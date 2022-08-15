import "./tvshow.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const TvShow = () => {
  const [dataApi, setDataApi] = useState([]);

  useEffect(() => {
    axios.get("https://api.themoviedb.org/3/tv/popular?api_key=f30892eccefc07deb28509f0da56ccc0")
    .then(dataAPI => setDataApi(dataAPI.data.results))
  }, []);



  return (
    <>
        <div>
          <ul className="container tvshow-list">
            {dataApi.length &&
              dataApi.map((e) => (
                <Link to={`/tvshowlink/${e.id}`} key={e.title} className="tvshow-item">
                  <img
                    className="tvshow-img"
                    src={`https://image.tmdb.org/t/p/w500${e.backdrop_path}`}
                    alt=""
                  />
                  <h3 className="tvshow-title">{e.name}</h3>
                  <time className="tvshow-time">{e.first_air_date}</time>
                </Link>
              ))}
          </ul>
        </div>
    </>
  );
};
