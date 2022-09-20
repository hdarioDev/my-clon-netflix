import React, { useRef, useState } from 'react'
import {
    Login,
    Wrapper,
    Top,
    Container,

} from './styles'

const IMG_LOGO = 'https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png'

const index = () => {

    return (
        <Login>
            <Top>
                <Wrapper>
                    <img
                        src={IMG_LOGO}
                        alt="Logo"
                    />

                </Wrapper>
            </Top>
            <Container>
                <form action="">
                    <h1>Sign In</h1>
                    <input type="email" placeholder="Email or phone number" />
                    <input type="password" placeholder="Password" />
                    <button>Sign In</button>
                    <span>
                        New to Netflix?
                        <b> Sign up now. </b>
                    </span>
                    <small>
                        This page is protected by Google reCAPTCHA to ensure you're not a bot.
                        <b>Learn more</b>.
                    </small>
                </form>
            </Container>
        </Login>
    )
}

export default index