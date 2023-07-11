import React from "react";
import col from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <header className={col.header}>
      <img src="Logo.png" alt="logo" width={10}/>
      {props.isAuth
            ?
            <span className={col.loginBlockIsAuth}>
                  {props.login} - <button onClick={props.logout}>
                  Log out</button>
            </span>
            :
            <NavLink
               className={col.loginBlockNotAuth} to={'/login'}
            >Login</NavLink>
         }
    </header>
  );
};
export default Header;
