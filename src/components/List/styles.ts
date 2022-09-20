import styled, { css } from "styled-components"
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'

export const List = styled.div`
    width: 100%;
    margin-top: 10px;
`
export const ListTitle = styled.span`
    color : white;
    font-size: 20px;
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
    width: 50px;
    height: 100%;
    background-color: rgb(22, 22, 22, 0.5);
    color: white;
    position: absolute;
    z-index: 99;
    /* background-color: cyan; */
    top: 0;
    bottom: 0;
    margin: auto;
`

export const ArrowBackIcon = styled(ArrowBackIosIcon)`
     ${Slider}
     left: 0;
     cursor: pointer;
`

// export const ArrowBackIcon = styled(({ isMoved, ...props}) => (
//     ArrowBackIosIcon 
//   ))<SvgStyledProps>`
//   ${Slider}
//   left: 0;
//   `;

export const ArrowNextIcon = styled(ArrowForwardIosIcon)`
     ${Slider}
     right: 0;
     cursor: pointer;
`
