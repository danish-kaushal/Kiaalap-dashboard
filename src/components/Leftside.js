import React from 'react'
import { NavLink } from 'react-router-dom';
const Leftside = () => {
    return (
    <div className="left-sidebar-pro">
        <nav id="sidebar" className="">
            <div className="sidebar-header">
                <NavLink exact to="/"><img className="main-logo" src="assets/img/logo/logo.png" alt="logo" /></NavLink>
                </div>
            <div className="left-custom-menu-adp-wrap comment-scrollbar">
                <nav className="sidebar-nav left-sidebar-menu-pro">
                    <ul className="metismenu" id="menu1">
                        <li id="removable">
                            <NavLink className="has-arrow pages" exact to="/" aria-expanded="false"><i className="bi bi-house"></i> <span className="mini-click-non">Pages</span></NavLink>
                            <ul className="submenu-angle page-mini-nb-dp">
                                <li><NavLink title="Login" exact to="/Login"><span className="mini-sub-pro">Login</span></NavLink></li>
                                <li><NavLink title="Register" exact to="/Register"><span className="mini-sub-pro">Register</span></NavLink></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        </nav>
    </div>
    )
}

export default Leftside;
