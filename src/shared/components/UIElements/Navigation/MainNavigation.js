import React from "react";
import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import { Link } from "react-router-dom";
import "./MainNavigation.css";
import "./MainHeader.css";
const MainNavigation = (props) => {
  return (
    <MainHeader>
      <button className="main-navigation__menu-btn">
        <span />
        <span />  
        <span />
      </button>
      <h1 className="main-navigation__title">
        <Link to="/">Your Places</Link>
      </h1>
      <nav>
        <NavLinks/>
      </nav>
    </MainHeader>
  );
};
export default MainNavigation;
