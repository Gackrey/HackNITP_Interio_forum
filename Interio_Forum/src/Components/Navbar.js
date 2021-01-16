import React from "react";
import { Link } from "react-router-dom";
import image from "../pics/avatar.jpg"
function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <Link to="/home" className="navbar-brand">
          Interio Forum
        </Link>
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link to="/home" className="nav-link ">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/consult" className="nav-link">
              Consult Designers
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/template" className="nav-link">
              Browse Templates
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link ml-5">
              Log Out
            </Link>
          </li>
          <img style={{ position: "absolute", top: "3px", right: "17px", width: "50px",height:"50px",borderRadius:"50%"}} src = {image}/> 
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
