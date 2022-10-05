import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import {
    Nav,
    Container,
    Right,
    Left,
    ImgProfile,
    ImgLogo,
    ItemLeft,
    ItemRight,
    WrapIconNotification,
    WrapIconLogo,
    WrapIconArrow,
    Profile,
    ProfileOptions,
    ProfileOptionsItem
} from './styles'


const DEFAULT_IMAGE = "https://ih1.redbubble.net/image.618427241.3222/flat,128x,075,f-pad,128x128,f8f8f8.u3.jpg";
const IMG_LOGO = 'https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png'

const index = () => {

    const [isScrolled, setIsScrolled] = useState(false)
    const navigate = useNavigate()

    const handleLogout = () => {
        console.log("event");

        navigate('/login')
    }

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    }
    console.log({ isScrolled });

    return (
        <Nav isScrolled={isScrolled}>
            <Container>
                <Left>
                    <ImgLogo src={IMG_LOGO} alt="Logo" />
                    <ItemLeft to="/home" className={({ isActive }) => isActive ? "nav-active" : ''} > Home </ItemLeft>
                    <ItemLeft to="/home" className={({ isActive }) => isActive ? "nav-active" : ''} > Series </ItemLeft>
                    <ItemLeft to="/home" className={({ isActive }) => isActive ? "nav-active" : ''} > Movies </ItemLeft>
                    <ItemLeft to="/home" className={({ isActive }) => isActive ? "nav-active" : ''} > Popular </ItemLeft>
                    <ItemLeft to="/home" className={({ isActive }) => isActive ? "nav-active" : ''} > My List </ItemLeft>

                </Left>
                <Right>
                    <WrapIconLogo />
                    <ItemRight>KID</ItemRight>
                    <WrapIconNotification />
                    <ImgProfile src={DEFAULT_IMAGE} alt="Potho" />

                    <Profile>
                        <WrapIconArrow />
                        <ProfileOptions>
                            <ProfileOptionsItem>Settings </ProfileOptionsItem>
                            <ProfileOptionsItem onClick={handleLogout} >Logout </ProfileOptionsItem>
                        </ProfileOptions>
                    </Profile>
                </Right>
            </Container>
        </Nav>
    )
}

export default index