import React, { useEffect, useState } from 'react'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import { Watch, Back } from './styles'
import { useNavigate } from 'react-router-dom'
import { IResponseMovieWatch, IWatch } from '../../interfaces/moviesInterface'


const TRAILER = "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761"



const index: React.FC = () => {
    const navigate = useNavigate();
    const [movie, setMovie] = useState<IWatch[]>([])
    // const getData = async () => {
    //     await fetch('http://api.themoviedb.org/3/movie/550/videos?api_key=1a3d84bff9dffbe5dcc3f8520c349dcc')
    //         .then(async (response) => {
    //             const data: IResponseMovieWatch = await response.json()
    //             console.log("data ", data.results);
    //             setMovie(data.results)
    //         })
    //         .then((data) => console.log(data));
    // }
    // useEffect(() => {
    //     getData()
    //     console.log("movie ", movie);

    // }, [])


    return (
        <Watch>
            <Back onClick={() => navigate(-1)}>
                <ArrowBackIcon />
            </Back>

            <video
                autoPlay
                controls
                src="https://storage.googleapis.com/web-dev-assets/video-and-source-tags/chrome.webm"
            />
            {/* <iframe
                            width="560"
                            height="315"
                            src={`https://www.youtube.com/watch?v=${movie[0].key}`}
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        /> */}
        </Watch>
    )
}

export default index