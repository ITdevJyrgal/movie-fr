import React, {useEffect, useState} from 'react';
import axios from "axios";
import {APIKEY} from "../../api/apiKey";
import {useParams} from "react-router-dom";

const Video = ({id}) => {
    const [video, setVideo] = useState([])

    const getVideo = async () => {
        const url = await axios(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${APIKEY}&language=en-US`)
        const {data} = await url
        await setVideo(data.results.slice(0,4))
    }

    useEffect(() => {
        getVideo()
    },[])

    return (
        <div className="container">
            <div className="d-flex flex-wrap justify-content-evenly">

                {
                    video.map(el => {
                        return (
                            <div>
                                <iframe width="500" height="300" src={`https://www.youtube.com/embed/${el.key}`}
                                        title="YouTube video player" frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen></iframe>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    );
};

export default Video;