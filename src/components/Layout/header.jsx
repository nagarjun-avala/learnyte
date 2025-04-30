import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import { logout } from "../../redux/actions/authAction";


const Header = () => {
  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
        style={{
          boxShadow: "0 2px 4px rgba(0,0,0,.08),0 4px 12px rgba(0,0,0,.08)",
        }}
      >
        <div className="container-fluid">
          <Link to="/" className="navbar-brand mx-2">
            {import.meta.env.VITE_APP_NAME}.com
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul className="navbar-nav ms-auto">
              {auth?.token ? (
                <>
                  {/* Search Button */}
                  {/* <li className="nav-item dropdown">
                    <NavLink to="/search" className="nav-link">
                      <button className="btn btn-outline-primary" type="button"  >Search</button>
                    </NavLink>
                  </li> */}
                  <li className="nav-item dropdown">
                    <span className="nav-link" href="#">
                      <img
                        src={auth?.user?.picture}
                        alt={auth?.user?.fullname}
                        style={{
                          borderRadius: "50%",
                          width: "30px",
                          height: "30px",
                        }}
                      />
                    </span>
                    <ul className="dropdown-menu">
                      <li>
                        <Link
                          to={`/profile/${auth.user._id}`}
                          className="dropdown-item"
                        >
                          Profile
                        </Link>
                      </li>
                      <li>
                        <Link to={`/course`} className="dropdown-item">
                          Corse
                        </Link>
                      </li>
                      <li>
                        <Link to={`/questions`} className="dropdown-item">
                          Question Form
                        </Link>
                      </li>

                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <button
                          className="dropdown-item"
                          onClick={() => dispatch(logout())}
                        >
                          Logout
                        </button>
                      </li>
                    </ul>
                  </li>

                </>
              ) : (
                <>
                  <li className="nav-item">
                    <NavLink to="/login" className="nav-link">
                      Login
                    </NavLink>
                  </li>
                </>
              )}
            </ul>

          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
