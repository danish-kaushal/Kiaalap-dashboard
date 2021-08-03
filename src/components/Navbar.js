import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="all-content-wrapper">
        <div className="header-advance-area">
          <div className="header-top-area">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="header-top-wraper">
                    <div className="row">
                      <div className="col-lg-1 col-md-0 col-sm-1 col-xs-12"></div>
                      <div className="col-lg-6 col-md-7 col-sm-6 col-xs-12">
                        <div className="header-top-menu tabl-d-n">
                          <ul className="nav navbar-nav mai-top-nav">
                            <li className="nav-item">
                              <NavLink exact to="/" className="nav-link">
                                Home
                              </NavLink>
                            </li>
                            <li className="nav-item">
                              <NavLink exact to="/" className="nav-link">
                                About
                              </NavLink>
                            </li>
                            <li className="nav-item">
                              <NavLink exact to="/" className="nav-link">
                                Services
                              </NavLink>
                            </li>
                            <li className="nav-item dropdown res-dis-nn">
                              <NavLink
                                exact
                                to="/"
                                data-toggle="dropdown"
                                role="button"
                                aria-expanded="false"
                                className="nav-link dropdown-toggle"
                              >
                                Project{" "}
                              </NavLink>
                            </li>
                            <li className="nav-item">
                              <NavLink exact to="/" className="nav-link">
                                Support
                              </NavLink>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                        <div className="header-right-info">
                          <ul className="nav navbar-nav mai-top-nav header-right-menu">
                            <li className="nav-item dropdown">
                              <NavLink
                                exact
                                to="/"
                                data-toggle="dropdown"
                                role="button"
                                aria-expanded="false"
                                className="nav-link dropdown-toggle"
                              >
                                <i className="bi bi-envelope"></i>
                                <span className="indicator-ms"></span>
                              </NavLink>
                            </li>
                            <li className="nav-item">
                              <NavLink
                                exact
                                to="/"
                                data-toggle="dropdown"
                                role="button"
                                aria-expanded="false"
                                className="nav-link dropdown-toggle"
                              >
                                <i className="bi bi-bell"></i>
                                <span className="indicator-nt"></span>
                              </NavLink>
                            </li>
                            <li className="nav-item">
                              <NavLink
                                exact
                                to="/"
                                data-toggle="dropdown"
                                role="button"
                                aria-expanded="false"
                                className="nav-link dropdown-toggle"
                              >
                                <img
                                  src="assets/img/product/pro4.jpg"
                                  alt="prof Anderson"
                                />
                                <span className="admin-name">
                                  Prof.Anderson
                                </span>
                              </NavLink>
                            </li>
                            <li className="nav-item nav-setting-open">
                              <NavLink
                                exact
                                to="/"
                                data-toggle="dropdown"
                                role="button"
                                aria-expanded="false"
                                className="nav-link dropdown-toggle"
                              >
                                <i className="bi bi-list"></i>
                              </NavLink>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
