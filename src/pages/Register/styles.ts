import styled from "styled-components"

const DEFAULT_IMAGE = "https://assets.nflxext.com/ffe/siteui/vlv3/a795ee10-8c6d-467c-8159-254be2b69013/047313be-8d6a-46dd-9396-bd286fa260ad/BO-es-20220912-popsignuptwoweeks-perspective_alpha_website_small.jpg"

export const Register = styled.div`
    width: 100vw;
    height: 100vh;
    background : linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%), url(${DEFAULT_IMAGE});
    background-size: cover;
    position: relative;
`
export const Top = styled.div`
`
export const Wrapper = styled.div`
    padding: 0px 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    img{
        height: 80px;
    }
`
export const LoginButton = styled.div`
    background-color:red;
    border: none;
    color: white;
    border-radius: 6px;
    padding: 5px 15px;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
`
export const Container = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: white;

`
export const Title = styled.div`
    font-size: 50px;
`
export const SubTitle = styled.div`
    margin: 20px;
    font-weight: 500;
    font-size: 20px;
`
export const Description = styled.div`
    font-size: 20px;

`
export const InputContainer = styled.div`
    width: 50%;
    background-color: white;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    height:50px;
    border-radius:6px;
    input{
        flex: 9;
        height: 100%;
        border: none;
        padding: 0 10px;
        outline: none;
    }
    button{
        flex: 3;
        height: 100%;
        background-color: red;
        border: none;
        color: white;
        font-size: 16px;
        cursor: pointer;
    }
`
export const Form = styled.form`

`
