import "./about.css";
import { useEffect, useState ,} from "react";
import { Link } from "react-router-dom";

export const About = () => {
  const [data, setData] = useState([]);
  // f30892eccefc07deb28509f0da56ccc0
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=f30892eccefc07deb28509f0da56ccc0`
    )
      .then((res) => res.json())
      .then((dataApi) => setData(dataApi.results));
  }, []);


  return (
    <>
      <div>
        <ul className="popular-list container">
          {data.length &&
            data.map((e) => (
              <Link to={`/aboutlink/${e.id}`}  className="popular-item">
                <img
                  className="popular-img"
                  src={`https://image.tmdb.org/t/p/w500${e.backdrop_path}`}
                  alt=""
                />
                <h3 className="popular-title">{e.title}</h3>
                <time className="popular-time">{e.release_date}</time>
              </Link>
            ))}
        </ul>
      </div>
    </>
  );
};
