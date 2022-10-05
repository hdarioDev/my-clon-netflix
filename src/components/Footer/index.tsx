import React from 'react'
import {
    Footer,
    IconsContainer,
    InformationContainer,
    Items,
} from './styles'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';



const index = () => {
    return (
        <Footer>
            <IconsContainer >
                <FacebookIcon />
                <InstagramIcon />
                <TwitterIcon />
                <YouTubeIcon />
            </IconsContainer>
            <InformationContainer>
                <Items>
                    <p>Audio description</p>
                    <p>Investor Relations</p>
                    <p>Legal notices</p>
                </Items>
                <Items>
                    <p>Help Center</p>
                    <p>Employment</p>
                    <p>Cookie preferences</p>
                </Items>
                <Items>
                    <p>Gift cards</p>
                    <p>Terms of use</p>
                    <p>Corporate information</p>
                </Items>
                <Items>
                    <p>Press</p>
                    <p>Privacy</p>
                    <p>Contact us</p>
                </Items>
            </InformationContainer>

        </Footer>
    )
}

export default index