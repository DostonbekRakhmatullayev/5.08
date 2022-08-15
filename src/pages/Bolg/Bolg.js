import "./bolg.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Blog = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=f30892eccefc07deb28509f0da56ccc0`
    )
      .then((res) => res.json())
      .then((dataApi) => setData(dataApi.results));
  }, []);
  return (
    <>
      <div>
        <ul className="container blog-list">
          {data.length &&
            data.map((e) => (
              <Link to={`/bolglink/${e.id}`} key={e.title} className="blog-item">
                <img
                  className="blog-img"
                  src={`https://image.tmdb.org/t/p/w500${e.backdrop_path}`}
                  alt=""
                />
                <h3 className="blog-title">{e.title}</h3>
                <time className="blog-time">{e.release_date}</time>
              </Link>
            ))}
        </ul>
      </div>
    </>
  );
};
