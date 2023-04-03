import React from "react";
import { slide as Menu } from "react-burger-menu";
import {NavLink} from "react-router-dom";

const Sidebar = () => {
    return (
        <Menu>
            <nav className='header--nav'>
                <NavLink to='/'>
                    <a className='menu-item'>home</a>
                </NavLink>
                <NavLink to='/popular'>
                    <a className='menu-item'>popular</a>
                </NavLink>
                <NavLink to='/top-rated'>
                    <a className='menu-item'>top-rated</a>
                </NavLink>
                <NavLink to='/up-coming'>
                    <a className='menu-item'>up-coming</a>
                </NavLink>
            </nav>
        </Menu>
    );
};

export default Sidebar;
