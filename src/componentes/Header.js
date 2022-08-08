import React from 'react';
import menu from "../images/svg/icons/menu.svg";
import logo from "../images/svg/icons/logo.svg";
import search from "../images/svg/icons/search.svg";

const menu_open = document.querySelector('.menu_open');
const search_open = document.querySelector('.search_open');
const menu_close = document.querySelector('.menu_close');
//console.log(menu_open);
//console.log(menu_close);

const Header = () => {

    return (
        <header className="shadow">
            <div className="container flex space">
                <div className="menu menu_open">
                    <img src={menu} alt="menu" />
                </div>
                <div className="logotipo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="search search_open">
                    <img src={search} alt="search" />
                </div>
            </div>
        </header>    
    );
}
 
export default Header;