import React, { useRef, useState } from 'react'
import {
    Login,
    Wrapper,
    Top,
    LoginButton,
    Container,
    Title,
    SubTitle,
    Description,
    InputContainer

} from './styles'

const IMG_LOGO = 'https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png'

const index = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const emailRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)
    const handleStart = () => {
        setEmail(emailRef.current!.value)
    }
    console.log("passwordRef ", passwordRef);

    const handleFinish = () => {
        setPassword(passwordRef.current!.value)
    }
    return (
        <Login>
            <Top>
                <Wrapper>
                    <img
                        src={IMG_LOGO}
                        alt="Logo"
                    />
                    <LoginButton>
                        Sign In
                    </LoginButton>
                </Wrapper>
            </Top>
            <Container>
                <Title>
                    Unlimited movies, TV shows, and more.
                </Title>
                <SubTitle>
                    Watch anyhwere, Cancel anytyme.
                </SubTitle>
                <Description>
                    Ready to watch? Enter your email to create or restart your membership.
                </Description>
                {
                    !email ? (
                        <InputContainer>
                            <input type="email" placeholder="Enter your email" ref={emailRef} />
                            <button onClick={handleStart} >Get Started</button>
                        </InputContainer>
                    ) : (
                        <InputContainer>
                            <input type="password" placeholder="password" ref={passwordRef} />
                            <button onClick={handleFinish} >Started</button>
                        </InputContainer>
                    )
                }
            </Container>
        </Login>
    )
}

export default index