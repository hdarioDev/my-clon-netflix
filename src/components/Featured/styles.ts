
import styled, { css } from 'styled-components';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import { MOVIES_BG, MOVIES_TITLE } from '../../utils/constants';
import { randomNumber } from '../../utils/randomNumber';


const indexVal = randomNumber(0, 3)
const IMAGE_MOVIE = MOVIES_BG[indexVal]
const IMAGE_TITLE = MOVIES_TITLE[indexVal]

export const Featured = styled.div`
    height: 90vh;
    position: relative;
`

export const ImageBg = styled.div`
    width: 100%;
    background : linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, #0b0b0b 100%), url(${IMAGE_MOVIE});
    height: 100%;
    background-size: cover;
    background-position: 50% 50%;
`
export const ImageTitleContainer = styled.div`

`
export const ImageTitleMovie = styled.div`
  width: 480px;
  height: 200px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
    background-image: url(${IMAGE_TITLE});
    @media (max-width: 768px) {
        width: 240px;
  }
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
   
    @media (max-width: 768px) {
        font-size: 10px;
        width: 240px;
  }
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