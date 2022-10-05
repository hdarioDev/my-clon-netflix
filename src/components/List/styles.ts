import styled, { css } from "styled-components"

export const List = styled.div`
    width: 100%;
    margin-top: 10px;
    margin-bottom: 20px;
`
export const ListTitle = styled.span`
    color : white;
    font-size: 16px;
    font-weight: 500;
    margin-left: 50px;
`
export const Wrapper = styled.div`
    position: relative;
`
export const ContainerItem = styled.div`
    display: flex;
    margin-left: 50px;
    width: max-content;
    margin-top: 10px;
    transform: translateX(0px);
    transition: all 1s ease;
`

const Slider = css`
    width: 30px;
    height: 120px;
    background-color: rgb(22, 22, 22, 0.8);
    color: white;
    position: absolute;
    z-index: 99;
    top: 0;
    bottom: 0;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ArrowBackIcon = styled.div`
     ${Slider}
     left: 0;
     cursor: pointer;
`
export const ArrowNextIcon = styled.div`
     ${Slider}
     right: 0;
     cursor: pointer;
`
