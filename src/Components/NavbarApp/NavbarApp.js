import React from "react";

import "./NavbarApp.css";
//importing other components and logo
import SearchBar from "./SearchBar/SearchBar";
import logo from "../../images/github-512.png";


function NavbarApp (){
    return (
        <div className="navbar">
            <div className="left-menu">
                <span>
                <div className="logo">
                    <img src={logo} alt="logo"/>
                </div>
                </span>
                <span>
                <select>
                    <option selected="selected" >Why Github?</option>
                    <option>Features</option>
                </select>
                </span>
                <span>Enterprise</span>
                <span>
                <select>
                    <option selected="selected">Explore</option>
                </select>
                </span>
                <span>Marketplace</span>
                <span>
                <select>
                    <option>Pricing</option>
                </select>
                </span>
            </div>
            <div className="right-menu">
                <SearchBar/>
                <button className="btn-sign">Sign in</button>
                <button className="btn-sign">Sign up</button>
            </div>
        </div>
    )
}

export default NavbarApp;