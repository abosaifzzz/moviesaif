// src/Components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ButtonGroup, Dropdown } from "react-bootstrap";
import { setLanguage } from "../Redux/Slice/language";

function Navbar() {
  const dispatch = useDispatch();
  const { direction, translation } = useSelector((state) => state.language);

  const favoriteQuantity = useSelector(
    (state) => state.favoriteQnt?.quantity || 0
  );
  const handleLangChange = (lang) => {
    dispatch(setLanguage(lang));
  };

  return (
    <div style={{ direction }} className="navbar-container">
      <nav className="navbar navbar-expand-lg nav-style">
        <div className="container-fluid">
          <button
            className="navbar-toggler bg-danger-subtle"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse d-flex justify-content-between navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link text-danger fs-6 text active"
                  aria-current="page"
                  to="/movies"
                >
                  {translation?.movies || "Movies"}
                </Link>
              </li>
              <li className="favorites">
                <Link className="nav-link text-white" to="/favourits">
                  {translation?.favourites || "Favourites"}
                  <span>{favoriteQuantity}</span>
                </Link>
              </li>
              <li>
                <Dropdown as={ButtonGroup}>
                  <Dropdown.Toggle
                    id="dropdown-custom-components"
                    variant="secondary"
                  >
                    {direction === "rtl" ? "AR" : "EN"}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item
                      eventKey="en"
                      onClick={() => handleLangChange("en")}
                      active={direction === "ltr"}
                    >
                      EN
                    </Dropdown.Item>
                    <Dropdown.Item
                      eventKey="ar"
                      onClick={() => handleLangChange("ar")}
                      active={direction === "rtl"}
                    >
                      AR
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </li>
            </ul>
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link text-white" to="/test">
                  {translation?.login || "Login"}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/register">
                  {translation?.register || "Register"}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
