import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../App.css";
import { Badge } from "antd";
import { useAuth } from "../Context/Auth";
import SearchInput from "./Form/SearchInput";
import useCategory from "../Hooks/UseCategory";
import { useCart } from "../Context/Cart";

const Navbar = () => {
  const [cart] = useCart();
  const [auth, setAuth] = useAuth();
  const categories = useCategory();
  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
  };
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-info">
          <div className="container-fluid ">
            <NavLink>
              <img
                src="https://i.ibb.co/hdNX5kN/Lens-Hub-logo.png"
                alt="Avtar"
                className="logo"
              /></NavLink>
            <NavLink to="/" className="navbar-brand" href="#">
              LensHub
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav m-auto m-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink
                    to="/"
                    className="nav-link active"
                    aria-current="page"
                    href="#"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to={"/categories"}
                    data-bs-toggle="dropdown"
                  >
                    Shop now
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to={"/categories"}>
                        All Categories
                      </Link>
                    </li>
                    {categories?.map((c) => (
                      <li>
                        <Link
                          className="dropdown-item"
                          to={`/category/${c.slug}`}
                        >
                          {c.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>

                {!auth.user ? (
                  <>
                    <li className="nav-item">
                      <NavLink to="/register" className="nav-link" href="#">
                        Register
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to="/login" className="nav-link" href="#">
                        Login
                      </NavLink>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="nav-item dropdown">
                      <NavLink
                        className="nav-link dropdown-toggle"
                        href="#"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        {auth?.user?.name}
                      </NavLink>
                      <ul className="dropdown-menu">
                        <li>
                          <NavLink
                            to={`/dashboard/${
                              auth?.user?.role === 1 ? "admin" : "user"
                            }`}
                            className="dropdown-item"
                          >
                            Dashboard
                          </NavLink>
                        </li>
                        <li className="nav-item">
                          <NavLink
                            onClick={handleLogout}
                            to="/login"
                            className="dropdown-item"
                            href="#"
                          >
                            Logout
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                  </>
                )}
                
                <li className="nav-item">
                  <NavLink to="/about" className="nav-link" href="#">
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/contact" className="nav-link" href="#">
                    Contact
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/blog" className="nav-link" href="#">
                    Blog
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/cart" className="nav-link" href="#">
                    <Badge count={cart?.length} showZero>
                      Cart
                    </Badge>
                  </NavLink>
                </li>
              </ul>
              <SearchInput />
            </div>
          </div>
        </nav>
    </>
  );
};

export default Navbar;
