import React from "react";
import { Nav, NavLink } from "../styles/navStyle";


const Navigation = () => (
  <Nav>
    <NavLink to={"/"} activeClassName="current-page"> Inicio </NavLink>
    <NavLink to={"/about-us"} activeClassName="current-page"> Nosotros </NavLink>
  </Nav>
)

export default Navigation;
