import "./upcomming.css";
import { Link, Route, Routes } from "react-router-dom";

export const UpComming = ({item}) => {
  
  return (
    <>
      <Link to={`/upcomingsalom/${item.id}`}  className="upocmming-item">
        <img
          className="upocmming-img"
          src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
          alt=""
        />
        <h3 className="upocmming-title">{item.title}</h3>
        <time className="upocmming-time">{item.release_date}</time>
      </Link>
    </>
  );
};
