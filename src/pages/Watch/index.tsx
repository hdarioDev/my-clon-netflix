import React from 'react'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import { Watch, Back } from './styles'

const TRAILER = "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761"

const index = () => {
    return (
        <Watch>
            <Back>
                <ArrowBackIcon />
                Home
            </Back>
            <video
                autoPlay
                controls
                src={TRAILER}
            />
            {/* progress */}

        </Watch>
    )
}

export default index