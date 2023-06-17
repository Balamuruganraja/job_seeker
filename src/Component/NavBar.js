import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <NavLink
            className="nav-link"
            activeClassName="active"
            to="/job-vacancies"
          >
            Jobs
          </NavLink>
        </li>
        <li>
          <NavLink
            className="nav-link"
            activeClassName="active"
            to="/personal-details"
          >
            Personal
          </NavLink>
        </li>

        <li>
          <NavLink className=" logout-btn" activeClassName="active" to="/">
            Logout
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
