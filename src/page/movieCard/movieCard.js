import React from 'react';
import {NavLink} from "react-router-dom";

const MovieCard = ({el}) => {
    return (
        <>
            <div className="col-3">
                <NavLink to={`/popular/popular-info/${el.id}`}>
                    <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${el.poster_path}`} alt=""/>
                </NavLink>
                <h5>{el.title}</h5>
            </div>

        </>
    );
};

export default MovieCard;