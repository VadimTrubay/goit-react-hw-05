import { Routes, Route, NavLink } from "react-router-dom";
import css from './App.module.css'
import clsx from 'clsx';
import Home from "./../pages/Home";
import Movies from "../pages/Movies";


const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

function App() {

  return (
    <div>
      <nav className={css.nav}>
        <NavLink to="/" className={buildLinkClass}>Home</NavLink>
        <NavLink to="/movies" className={buildLinkClass}>Movies</NavLink>
      </nav>
      <hr className="hr"/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>
    </div>
  )
}

export default App;
