
import styled, { css } from 'styled-components';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

export const Featured = styled.div`
    background-color: red;
    height: 90vh;
    position: relative;
`

export const ImageBg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;

`
export const ImageTitleMovie = styled.img`
    width: 400px;
`

export const Info = styled.div`
    width: 35%;
    position: absolute;
    left: 50px;
    bottom: 100px;
    color: white;
    display: flex;
    flex-direction: column;

`

export const Description = styled.div`
    margin : 20px 0px;
    font-size: 16px;
`

export const ContainerButtons = styled.div`
    display : flex;
`


const ButtonBg = css`
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size:18px;
    font-weight: 500px;
    margin-right: 10px;
    cursor: pointer;
    `

export const ButtonPlay = styled.button`
    ${ButtonBg}
    background-color: white;
    color : var(--main-color);

`

export const PlayDescription = styled.span`

`

export const ButtonMore = styled.button`
    ${ButtonBg}
    background-color: gray;
    color: white;
`

export const InfoDescription = styled.span`
    margin-left:5px;
`
export const IconPlay = styled(PlayArrowIcon)`
`
export const IconInfo = styled(InfoOutlinedIcon)`
`

export const Category = styled.div`
    position: absolute;
    top: 80px;
    left: 50px;
    font-size:30px;
    font-weight: 500;
    color: white;
    display: flex;
    align-items: center;
`
export const SelectType = styled.select`
    cursor: pointer;
    background-color: var(--main-color);
    border: 1px solid white;
    color: white;
    margin-left: 20px;
    padding: 5px;
`
export const TypeFeatured = styled.span`

`