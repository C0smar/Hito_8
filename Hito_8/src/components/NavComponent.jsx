import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink, useNavigate } from "react-router-dom";
import { MyContext } from "../Context";
import React, { useContext } from "react";

const NavComponent = () => {
  const { totalPrice, token, logout, formatTotal, handleLogin } =
    useContext(MyContext);
  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "navbar-brand active" : "navbar-brand"
          }
        >
          ¡Pizzería Mamma Mía!
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {token ? (
              <>
                <li className="nav-item">
                  <NavLink
                    to="/profile"
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    }
                  >
                    🔓 Profile
                  </NavLink>
                </li>
                <li className="nav-item">
                  <button
                    className="btn btn-outline-light me-2"
                    onClick={logout}
                  >
                    🔓 Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <NavLink
                    to="/login"
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    }
                  >
                    🔐 Login
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/register"
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    }
                  >
                    🔐 Register
                  </NavLink>
                </li>
              </>
            )}
          </ul>
          <ul className="navbar-nav ms-auto me-3">
            <li className="nav-item">
              <NavLink to="/cart" className="btn btn-outline-primary">
                🛒 Total: {formatTotal(totalPrice)}
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavComponent;
