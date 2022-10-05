import React, { useEffect, useState } from 'react'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import { Watch, Back } from './styles'
import { useNavigate } from 'react-router-dom'
import { IResponseMovieWatch, IWatch } from '../../interfaces/moviesInterface'


const TRAILER = "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761"



const index: React.FC = () => {
    const navigate = useNavigate();

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
        </Watch>
    )
}

export default index