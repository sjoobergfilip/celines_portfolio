import React from "react";
import { NavLink } from "react-router-dom";
import Celine from "./logo_c.png";
import "../../index.css";

const NavBar = () => {
    return (
        <header>
            <div className="mx-auto flex lg:justify-between md:justify-between lg:flex-row md:flex-row flex-col absolute z-40 w-screen background-color">
                <nav className="flex nav-link-font">
                    <NavLink
                        to="/"
                        exact
                        activeClassName="nav-link-active"
                        className="home-name inflex-flex items-center px-10 mr-4 text-gray-900 hover:text-gray-5 text-3xl font-bold cursive tracking-widest font-space"
                    >
                        <img src={Celine} className="w-40" alt="logo" />
                    </NavLink>
                    <NavLink
                        to="/project"
                        activeClassName="nav-link-active"
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-gray-900 hover:text-gray-800 font-space"
                    >
                        Projects
                    </NavLink>
                    <NavLink
                        to="/about"
                        activeClassName="nav-link-active"
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-gray-900 hover:text-gray-800 font-space"
                    >
                        About Me
                    </NavLink>
                </nav>
            </div>
        </header>
    );
};

export default NavBar;
