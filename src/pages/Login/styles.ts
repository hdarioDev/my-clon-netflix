import styled from "styled-components"

const DEFAULT_IMAGE = "https://assets.nflxext.com/ffe/siteui/vlv3/a795ee10-8c6d-467c-8159-254be2b69013/047313be-8d6a-46dd-9396-bd286fa260ad/BO-es-20220912-popsignuptwoweeks-perspective_alpha_website_small.jpg"

export const Login = styled.div`
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
    form {
        width: 340px;
        height: 400px;
        padding: 30px;
        border-radius: 6px;
        background-color: var(--main-color);
        display: flex;
        flex-direction: column;
        justify-content:space-around; 
            input {
                height:40px;
                border-radius: 6px;
                background-color: gray;
                color: white;
                padding-left: 10px;
             ::placeholder {
                color: white;
            }
        
        }
        button {
                height:40px;
                border-radius: 6px;
                background-color: red;
                color: white;
                border: none;
                font-size: 18px;
                font-weight: 500;
                cursor: pointer;
         }    
         span{
            color: lightgrey;
            b{
                color: white;
            }
         } 
        
    }

`