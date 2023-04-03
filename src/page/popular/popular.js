import React, {useEffect, useState} from 'react';
import axios from "axios";
import {APIKEY} from "../../api/apiKey";
import MovieCard from "../movieCard/movieCard";

const Popular = () => {

    const [popular, setPopular] = useState([])
    const buttons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const [currentPage, setCurrentPage] = useState([])

    const getPopular = async () => {
        const res = await axios(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKEY}&language=en-EN&page=${currentPage}`)
        const {data} = await res
        setPopular(data.results)
    }

    useEffect(() => {
        getPopular()
    }, [currentPage])

    console.log(popular)

    return (
        <div className="container">
            <div className="row">
                {
                    popular.map(el => <MovieCard el={el}/>)
                }

                <div className='pagination'>
                    {
                        buttons.map((el, idx) => (
                            <button className={currentPage === idx + 1 ? 'active' : ''}
                                    onClick={() => setCurrentPage(el)}
                            >{el}</button>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Popular;