import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import {APIKEY} from "../../api/apiKey";
import Slider from "react-slick";
import Video from "../../components/video/video";

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
            dots: false,
            arrows: false,
            infinite: false,
            slidesToShow: 5,
            slidesToScroll: 1,
            initialSlide: 0,
            autoplay: true,
            speed: 500,
            autoplaySpeed: 500,
            cssEase: "linear",
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
                                {
                                    cast.map(el => {
                                        return (
                                            <div>
                                                {
                                                    el.profile_path ? <img
                                                        src={`https://www.themoviedb.org/t/p/w138_and_h175_face/${el.profile_path}`}
                                                        alt=""
                                                        style={{
                                                            marginBottom: "20px"
                                                        }
                                                        }/> : <img
                                                        src="https://cdn-icons-png.flaticon.com/512/1177/1177568.png"
                                                        width={160}
                                                        style={{
                                                            marginBottom: "20px"
                                                        }
                                                        }
                                                        alt=""/>
                                                }
                                                <h5>{el.character}</h5>
                                            </div>
                                        )
                                    })
                                }
                            </Slider>
                        </div>
                    </div>
                </div>

                <div>
                   <Video id={id}/>
                </div>
            </>
        );
    }
;

export default DetailtPage;