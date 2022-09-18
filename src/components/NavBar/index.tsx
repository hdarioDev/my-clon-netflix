import React, { useState } from 'react'

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


const DEFAULT_IMAGE = "https://assets.nflxext.com/ffe/siteui/vlv3/a795ee10-8c6d-467c-8159-254be2b69013/047313be-8d6a-46dd-9396-bd286fa260ad/BO-es-20220912-popsignuptwoweeks-perspective_alpha_website_large.jpg";
const IMG_LOGO = 'https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png'

const index = () => {

    const [isScrolled, setIsScrolled] = useState(false);

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    }
    console.log({ isScrolled });

    return (
        <Nav isScrolled={isScrolled}>
            <Container>
                <Left>
                    <ImgLogo src={IMG_LOGO} alt="Logo" width="100%" />
                    <ItemLeft>Home</ItemLeft>
                    <ItemLeft>Series</ItemLeft>
                    <ItemLeft>Movies</ItemLeft>
                    <ItemLeft>Popular</ItemLeft>
                    <ItemLeft>My List</ItemLeft>
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
                            <ProfileOptionsItem>Logout </ProfileOptionsItem>
                        </ProfileOptions>
                    </Profile>


                </Right>

            </Container>
        </Nav>
    )
}

export default index