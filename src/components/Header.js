import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header sticky top-0 bg-white shadow z-50">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              <div className="d-flex align-items-center">
                {/* <i className="fas fa-home"></i> */}
                <img src="/img/logoTextile.png" alt="product" className="w-56 h-16" />
                {/* <span  className="pl-2 text-green-700">Lanhong</span> */}
                {/* <img src="/img/logoName.png" alt="product" className="w-40 h-10" /> */}
                {/* <span className="ms-2">Gemstones</span> */}
              </div>
            </Link>
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
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                {/* <li className="nav-item">
                  <Link className="nav-link" to="/blog">
                    Blog
                  </Link>
                </li> */}
                {/* <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li> */}
                {/* <li className="nav-item">
                  <Link className="nav-link" to="#">
                    Category <i className="fas fa-chevron-down"></i>
                  </Link>
                  <ul className="sub-ul">
                    <li>
                      <Link to="#">item</Link>
                    </li>
                    <li>
                      <Link to="#">item</Link>
                    </li>
                    <li>
                      <Link to="#">item</Link>
                    </li>
                  </ul>
                </li> */}
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
