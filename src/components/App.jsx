import { Routes, Route, NavLink } from "react-router-dom";
import css from "./App.module.css";
import clsx from "clsx";
import Home from "./../pages/Home";
import Movies from "../pages/Movies";
import NotFound from "../components/NotFound/NotFound";
import { Suspense } from "react";
import MovieDetail from "./MovieDetail/MovieDetail";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const App = () => {

  return (
    <div>
      <nav className={css.nav}>
        <NavLink to="/" className={buildLinkClass}>
          Home
        </NavLink>
        <NavLink to="/movies" className={buildLinkClass}>
          Movies
        </NavLink>
      </nav>
      <hr className="hr" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route
          path="/movies/:movieId"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <MovieDetail />
            </Suspense>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
