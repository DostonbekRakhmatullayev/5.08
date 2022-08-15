import { Home } from "./pages/Home/Home";
import { About } from "./pages/About/About";
import { Blog } from "./pages/Bolg/Bolg";
import { TvShow } from "./pages/TvShow/TvShow";
import { UpCommingLink } from "./Link/Comming";
import { Routes, NavLink, Route } from "react-router-dom";
import { KinoId } from "./pages/kinoId/KinoId";
import { AboutLink } from "./pages/About/AboutLink/AboutLink";
import { BolgLink } from "./pages/Bolg/BolgLink/BolgLink";
import { TvShowLink } from "./pages/TvShow/TvShowLink/TvShowLink";



export const  Private = () => {
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
            <Route path="/upComming" element={<UpCommingLink />} />
            <Route path="/upcomingsalom/:id" element={<KinoId />} />
          </Routes>
        </div>
      </div>
    );
  }