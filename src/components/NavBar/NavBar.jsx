import { NavLink } from "react-router-dom"

import "./NavBar.css"

function Navbar () {
  return (
    <nav className="navbar">
      <img src="/images/logo.jpeg" className="logo" alt="logo" />
      <ul className="nav-links">
        <li className="active"><NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink></li>
        <li><NavLink to="/appliedpage" className={({isActive}) => (isActive ? "active" : " ")}>Applied Jobs</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;