import React, {useEffect, useState} from 'react';
import axios from "axios";
import {APIKEY} from "../../api/apiKey";
import {Link, useParams} from "react-router-dom";
import Slider from "react-slick";
const PersonDetails = () => {

    const params = useParams()
    const [person,setPerson] = useState([])
    const [knowFilms,setKnowFilms] = useState([])

    useEffect(()=>{
        axios(`https://api.themoviedb.org/3/person/${params.personId}?api_key=${APIKEY}&language=en-US`)
            .then(({data})=>setPerson(data))
        axios(`https://api.themoviedb.org/3/person/${params.personId}/movie_credits?api_key=${APIKEY}&language=en-US`)
            .then(({data})=>setKnowFilms(data.cast))
    },[])
    console.log(person)
    console.log(params,"person")
    console.log(knowFilms)

    let settings = {
        dots: false,
        arrows:false,
        infinite: false,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 7,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="container mx-auto">
            <div>
                <div>
                    <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${person.profile_path}`} alt=""
                         className="rounded-md"/>
                </div>
                <div>
                    <h1>{person.name}</h1>
                    <p>{person.birthday}</p>
                    <p>Biography</p>
                    <p>{person.biography}</p>
                </div>
            </div>

            <p>Fame for</p>

            <Slider {...settings}>
                {
                    knowFilms.map(el => (
                        <div>
                            <div>
                                <Link to={`/popular/popular-info/${el.id}`}>
                                    <img src={el.poster_path ? `https://www.themoviedb.org/t/p/w150_and_h225_bestv2/${el.poster_path}`:
                                        "https://www.themoviedb.org/t/p/w150_and_h225_bestv2/qIUFg6tzKeK5bUDguonWCAFceNB.jpg"} alt=""
                                         className="rounded-md"/>
                                </Link>

                                <p>{el.original_title}</p>
                            </div>
                        </div>
                    ))
                }
            </Slider>
        </div>
    );
};

export default PersonDetails;