import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav-header">
      <NavLink 
        to="/accueil" 
        className={({ isActive }) => 
          isActive ? "nav-header__nav-link-home active" : "nav-header__nav-link-home"
        }
      >
        Accueil
      </NavLink>
      <NavLink 
        to="/about" 
        className={({ isActive }) => 
          isActive ? "nav-header__nav-link-about active" : "nav-header__nav-link-about"
        }
      >
        A Propos
      </NavLink>
    </nav>
  );
};

export default Nav;