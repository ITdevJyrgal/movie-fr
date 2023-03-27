import React, {useState} from 'react';
import {Link, NavLink} from "react-router-dom";

const Header = ({changeThem}) => {

    const [mode, setMode] = useState(JSON.parse(localStorage.getItem('mode') || false ))

    const fn = () => {
        changeThem(mode)
        setMode(!mode)
    }

    return (
        <>
            <header id="header">
                <div className="container">
                    <div className="header">
                        <h4>LOGO</h4>
                        <nav className='header--nav'>
                            <NavLink to='/'>
                                <a>home</a>
                            </NavLink>
                            <NavLink to='/popular'>
                                <a>popular</a>
                            </NavLink>
                            <NavLink to='/top-rated'>
                                <a>top-rated</a>
                            </NavLink>
                            <NavLink to='/up-coming'>
                                <a>up-coming</a>
                            </NavLink>
                        </nav>
                        <button onClick={() => fn(mode)}>{mode ? "night" : "dark"}</button>
                        <div className='header--search'>
                            <input type="text"/>
                            <button>search</button>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;