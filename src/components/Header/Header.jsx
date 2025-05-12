import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header-nav d-flex justify-content-center align-items-center">
      <nav>
        <ul className="nav-list d-flex gap-4 m-0 p-0">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `nav-link ${isActive ? "active-link" : ""}`
              }
            >
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `nav-link ${isActive ? "active-link" : ""}`
              }
            >
              ABOUT
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/portfolio"
              className={({ isActive }) =>
                `nav-link ${isActive ? "active-link" : ""}`
              }
            >
              PORTFOLIO
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `nav-link ${isActive ? "active-link" : ""}`
              }
            >
              CONTACT
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
