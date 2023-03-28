import styled, { css } from "styled-components";
import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import AddIcon from '@material-ui/icons/Add';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import ThumbDownAltOutlinedIcon from '@material-ui/icons/ThumbDownAltOutlined';

export interface IProps {
    isHovered: boolean;
    index: number;
}

export const Item = styled.div<IProps>`
    width: 225px;
    height: 120px;
    background-color: var(--main-color);
    margin-right: 5px;
    overflow: hidden;
    cursor: pointer;
    color: white;
    border-radius: 6px;

    @media (min-width: 768px) {
        &:hover{
            width: 325px;
            height:280px;  
            position: absolute;
            top: -90px;
            ${({ index }) => css`left: ${index * 225 - 50}px;`} 
            -webkit-box-shadow: 0px 1px 15px 0px rgba(255,255,255,0.14); 
            box-shadow: 0px 1px 15px 0px rgba(255,255,255,0.14);
            border-radius: 6px;
            img{
                height: 150px;
            }
            video{
                width: 100%;
                height: 150px;
                position: absolute;
                top: 0;
                left: 0;
                object-fit: cover;
            }
        }
  }
    &:hover{
       
    }
`
export const ImageItem = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

export const ItemInfo = styled.div`
    display: flex;
    flex-direction: column;
    padding:5px;
`
export const IconsContainer = styled.div`
    display: flex;
    margin-bottom: 10px;
    position: relative;
    .icon{
        border: 2px solid white;
        padding: 5px;
        border-radius: 50%;
        margin-right: 10px;
        height: 32px;
        width: 32px;
        /* font-size:16px; */
    }
`
export const IconPlay = styled(PlayArrowIcon)`

`
export const IconAdd = styled(AddIcon)`
`
export const IconLike = styled(ThumbUpOutlinedIcon)`
`
export const IconDisLike = styled(ThumbDownAltOutlinedIcon)`
`
export const ItemInfoTop = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    font-weight: 600;
    color: gray;
    font-size:12px;
`
export const SpanHour = styled.div`
`
export const SpanLimit = styled.div`
    border: 1px solid gray;
    padding: 1px 3px;
    margin: 0 10px;

`
export const SpanYear = styled.div`
`
export const ItemInfoDescription = styled.div`
    font-size:13px;
    margin-bottom: 12px;
    display: flex;
    flex-direction: 'row';
    overflow: hidden;
 div{
    margin-left: 12px;
 }
`

export const ItemInfoGenre = styled.div`
    font-size: 14px;
    color: lightgrey;
`