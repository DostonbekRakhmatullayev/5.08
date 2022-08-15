import { useParams } from "react-router-dom";
import { useEffect, useState,  } from "react";
import axios from "axios";

export const BolgLink = () => {
  const [info, setInfo] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=f30892eccefc07deb28509f0da56ccc0`
      )
      .then((res) => setInfo([res.data]))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <>
      <div>
        {info.length >= 1 &&
          info.map((e) => (
            <li className="d-flex justify-content-center mx-5">
              <img
                className=" rounded "
                src={`https://image.tmdb.org/t/p/w300${e.poster_path}`}
                alt=""
              />
              <div className="mx-5">
                <h3 className=" fs-1">{e.title}</h3>
                <p className="w-50 mx-3 ">{e.overview}</p>
                <p className="mx-3 text-warning fw-bolder fs-4">{e.tagline}</p>
                <p className="mx-3 text-warning fw-bolder fs-4">{e.status}</p>
                <time className="popular-time ">{e.release_date}</time>
                <a className="d-block mx-3 fs-5 link--title " href={`${e.homepage}`}>
                  {e.title}
                </a>
              </div>
            </li>
          ))}
      </div>
    </>
  );
};
