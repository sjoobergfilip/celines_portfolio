import React from "react";
import { NavLink } from "react-router-dom";
import "../../index.css";

const NavBar = () => {
    return (
        <header>
            <div className="container mx-auto flex lg:justify-between md:justify-between lg:flex-row md:flex-row flex-col">
                <nav className="flex nav-link-font">
                    <NavLink
                        to="/"
                        exact
                        activeClassName="nav-link-active"
                        className="home-name inflex-flex items-center py-6 px-3 mr-4 text-gray-900 hover:text-gray-5 text-3xl font-bold cursive tracking-widest"
                    >
                        C
                    </NavLink>
                    <NavLink
                        to="/project"
                        activeClassName="nav-link-active"
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-gray-900 hover:text-gray-800"
                    >
                        Projects
                    </NavLink>
                    <NavLink
                        to="/about"
                        activeClassName="nav-link-active"
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-gray-900 hover:text-gray-800"
                    >
                        About Me
                    </NavLink>
                </nav>
            </div>
        </header>
    );
};

export default NavBar;
