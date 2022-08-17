import { Home } from "./pages/Home/Home";
import { About } from "./pages/About/About";
import { Blog } from "./pages/Bolg/Bolg";
import { TvShow } from "./pages/TvShow/TvShow";
import { UpComming } from "./pages/UpComming/UpComming";
import { Routes, NavLink, Route, useNavigate } from "react-router-dom";
import { KinoId } from "./pages/kinoId/KinoId";
import { AboutLink } from "./pages/About/AboutLink/AboutLink";
import { BolgLink } from "./pages/Bolg/BolgLink/BolgLink";
import { TvShowLink } from "./pages/TvShow/TvShowLink/TvShowLink";
import { Search } from "./pages/Search/Search";
import { useEffect, useState } from "react";

export const Private = () => {
  const [inputVal, setInputVal] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (inputVal.length) {
      navigate("/search/" + inputVal);
    }else {
      navigate("/")
    }

  }, [inputVal]);

  return (
    <div className="App">
      <div className="header-box">
        <div className="container">
          <header className="header">
            <NavLink className="header__nav-link" to="/">
              Home Page
            </NavLink>
            <NavLink className="header__nav-link" to="/About">
              Popular Movies
            </NavLink>
            <NavLink className="header__nav-link" to="/Bolg">
              Top-rated Movies
            </NavLink>
            <NavLink className="header__nav-link" to="/upComming">
              Up comming Movies
            </NavLink>
            <NavLink className="header__nav-link" to="/tvShow">
              Tv-show
            </NavLink>
            <input
              onInput={(evt) => setInputVal(evt.target.value)}
              type="search"
            />
          </header>
        </div>
      </div>

      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/aboutlink/:id" element={<AboutLink />} />
          <Route path="/bolg" element={<Blog />} />
          <Route path="/bolglink/:id" element={<BolgLink />} />
          <Route path="/tvShow" element={<TvShow />} />
          <Route path="/tvshowlink/:id" element={<TvShowLink />} />
          <Route path="/upComming" element={<UpComming />} />
          <Route path="/upcomingsalom/:id" element={<KinoId />} />
          <Route path="/search/:searchQuery" element={<Search />} />
        </Routes>
      </div>
    </div>
  );
};
