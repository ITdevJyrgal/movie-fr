import React, {useState} from 'react';
import {Link, NavLink, useNavigate} from "react-router-dom";

const Header = ({changeThem}) => {


    const [search, setSearch] = useState('')
    const navigate = useNavigate();
    console.log(search)


    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    const handleSearch = () => {
        navigate(`/search-movie/:${search}`)
    }

    const [mode, setMode] = useState(JSON.parse(localStorage.getItem('mode') || false))
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
                            <input
                                onChange={handleChange}
                                type="search" name=''/>
                            <button onClick={handleSearch}>search</button>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;