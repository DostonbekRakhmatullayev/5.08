import "./about.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {Paginations} from "../../Pagination/Pagination"

export const About = () => {
  const [data, setData] = useState({
    isLoading: true,
    isError: false,
    data: {},
    totalPage: 1,
  });

  const [active, setActive] = useState(1);

  // f30892eccefc07deb28509f0da56ccc0
  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/popular`, {
        params: {
          api_key: `f30892eccefc07deb28509f0da56ccc0`,
          page: active,
        },
      })
      .then((dataAPI) =>
        setData({
          isLoading: false,
          isError: false,
          data: dataAPI.data.results,
          totalPage:
            dataAPI.data.total_pages > 500 ? 500 : dataAPI.data.total_pages,
        })
      );
  }, [active]);


  return (
    <>
      <div>
        <ul className="popular-list container">
          {data.data.length &&
            data.data.map((e) => (
              <Link to={`/aboutlink/${e.id}`} className="popular-item">
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
       <Paginations data={data} setActive={setActive}/>
      </div>
    </>
  );
};
