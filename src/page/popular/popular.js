import React, {useEffect, useState} from 'react';
import axios from "axios";
import {APIKEY} from "../../api/apiKey";
import MovieCard from "../movieCard/movieCard";

const Popular = () => {

    const [popular, setPopular] = useState([])

    const getPopular = async () => {
        const res = await axios(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKEY}&language=en-EN&page=1`)
        const {data} = await res
        setPopular(data.results)
    }

    useEffect(() => {
        getPopular()
    }, [])

    console.log(popular)

    return (
        <div className="container">
            <div className="row">
                {
                    popular.map(el => <MovieCard el={el}/>)
                }
            </div>
        </div>
    );
};

export default Popular;