import { Link, NavLink, Outlet } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const activeClassName = "active-link";
  return (
    <>
      <header>
        <nav>
          <ul className="header-gen-opts">
            <li>
              {/* <Link to="/"> Dashboard</Link> */}
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? activeClassName : undefined
                }
              >
                Dashboard
              </NavLink>
            </li>
            <li>
              {/* <Link to="/categories"> Categories</Link> */}
              <NavLink
                to="/categories"
                className={({ isActive }) =>
                  isActive ? activeClassName : undefined
                }
              >
                Categories
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
