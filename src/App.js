import "./App.css";
import { Home } from "./pages/Home/Home";
import { About } from "./pages/About/About";
import { Blog } from "./pages/Bolg/Bolg";
import { TvShow } from "./pages/TvShow/TvShow";
import { UpComming } from "./pages/UpComming/UpComming";
import { Routes, NavLink, Route } from "react-router-dom";

function App() {
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
          <Route path="/bolg" element={<Blog />} />
          <Route path="/tvShow" element={<TvShow />} />
          <Route path="/upComming" element={<UpComming />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
