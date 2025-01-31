import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <img src="/images/logo.jpeg" className={styles.logo} alt="logo" />
      <ul className={styles.navLinks}>
        <li className={styles.navItem}>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Jobs
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink
            to="/applied"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Applied Jobs
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
