import React from "react";
import col from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
  return (
    <nav className={col.nav}>
      <div className={col.item}>
        <NavLink
          to="/profile"
          className={(navData) => (navData.isActive ? col.active : col.item)}
        >
          Profile
        </NavLink>
      </div>
      
      <div className={`${col.item} ${col.active}`}>
        <NavLink
          to="/dialogs"
          className={(navData) => (navData.isActive ? col.active : col.item)}
        >
          Message
        </NavLink>
      </div>

      <div className={col.item}>
        <NavLink
          to="/news"
          className={(navData) => (navData.isActive ? col.active : col.item)}
        >
          News
        </NavLink>
      </div>

      <div className={col.item}>
        <NavLink
          to="/music"
          className={(navData) => (navData.isActive ? col.active : col.item)}
        >
          Music
        </NavLink>
      </div>

      <div className={col.item}>
        <NavLink
          to="/users"
          className={(navData) => (navData.isActive ? col.active : col.item)}
        >
          Users
        </NavLink>
      </div>

      <div className={col.item}>
        <NavLink
          to="/friends"
          className={(navData) => (navData.isActive ? col.active : col.item)}
        >
          Friends
        </NavLink>
      </div>

      <div className={col.item}>
        <NavLink
          to="/settings"
          className={(navData) => (navData.isActive ? col.active : col.item)}
        >
          Settings
        </NavLink>
      </div>
    </nav>
  );
};
export default Navbar;
