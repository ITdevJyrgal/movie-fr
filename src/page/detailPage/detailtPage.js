import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import {APIKEY} from "../../api/apiKey";
import Slider from "react-slick";

const DetailtPage = () => {

        const {id} = useParams()
        const [details, setDetails] = useState({})
        const [cast, setCast] = useState([])

        const getDetails = async () => {
            try {
                const link = await axios(`https://api.themoviedb.org/3/movie/${id}?api_key=${APIKEY}&language=en-US`)
                const {data} = await link
                await setDetails(data)
            } catch (e) {
                console.log(e, 'error')
            }
        }

        const getCast = async () => {
            try {
                const url = await axios(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${APIKEY}&language=en-US`)
                const {data} = await url
                await setCast(data.cast)
            } catch (e) {
                console.log(e, 'error')
            }
        }


        useEffect(() => {
            getDetails()
            getCast()
        }, [])

        console.log(details)

        const settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            initialSlide: 0,
        }
        return (
            <>
                <div style={{
                    background: `url("https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${details.backdrop_path}") no-repeat center/cover`,
                    minHeight: "90.6vh",
                    padding: "75px 0"
                }}>
                    <div className="container">
                        <div className="d-flex justify-content-around ">
                            <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${details.poster_path}`} alt=""/>
                            <div className="w-50 block">
                                <h3 className="text-white">{details.title}</h3>
                                <h4 className="text-white-50">{Math.floor(details.runtime / 60)}h {details.runtime % 60}min</h4>
                                <p className="vote--average">{Math.floor(details.vote_average)}</p>
                                <p className="text-white">{details.overview}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="container">
                        <div>

                            <Slider {...settings}>
                                <div>
                                    {
                                        cast.map(el => {
                                            return (
                                                <div>
                                                    {
                                                        el.profile_path ?  <img
                                                            src={`https://www.themoviedb.org/t/p/w138_and_h175_face/${el.profile_path}`}
                                                            alt=""/> : <img src="https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png" alt=""/>
                                                    }
                                                    <h2>{el.character}</h2>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </Slider>
                        </div>

                    </div>
                </div>
            </>
        );
    }
;

export default DetailtPage;