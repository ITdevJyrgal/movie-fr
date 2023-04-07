import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import {APIKEY} from "../../api/apiKey";
import MovieCard from "../../page/movieCard/movieCard";

const Search = () => {


    const {movieName} = useParams();
    const [result, setResult] = useState([]);
    console.log(result)

    useEffect(() => {
        axios(`https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&query=${movieName}`)
            .then(({data}) => setResult((data.results)))
    }, [movieName])

    return (
        <div className='container'>
            <div className="row">
                {
                    result?.map(el => (
                        // <div key={el.id}>
                        //     <img src={`https://image.tmdb.org/t/p/w500${el.poster_path}`} alt="img"/>
                        //     <h3 style={{color: "white"}}>{el.title}</h3>
                        // </div>
                        <MovieCard el={el}/>
                    ))
                }
            </div>
        </div>
    );
};

export default Search;