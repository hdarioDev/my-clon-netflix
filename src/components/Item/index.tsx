import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Movie } from '../../interfaces/moviesInterface';
import {
    Item,
    ImageItem,
    ItemInfo,
    IconsContainer,
    IconPlay,
    IconAdd,
    IconLike,
    IconDisLike,
    ItemInfoTop,
    SpanHour,
    SpanLimit,
    SpanYear,
    ItemInfoDescription,
    ItemInfoGenre
} from './styles'

const URI_PO = 'https://image.tmdb.org/t/p/w500'
const TRAILER = "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761"
interface IProps {
    index: number;
    movie: Movie;

}

const index = ({ index, movie }: IProps) => {
    const [isHovered, setIsHovered] = useState(false)
    console.log('==> ', movie);

    const navigate = useNavigate();
    const handleWatch = () => {
        navigate('/watch')
    }
    return (
        <Item
            onClick={handleWatch}
            isHovered={isHovered}
            index={index}
            onMouseEnter={() => { setIsHovered(true) }}
            onMouseLeave={() => { setIsHovered(false) }}
        >
            <ImageItem
                src={`${URI_PO}${movie.backdrop_path || movie.poster_path
                    }`}
            />
            {
                isHovered && (
                    <>
                        <video src={TRAILER} autoPlay={true} loop onClick={handleWatch} />
                        <ItemInfo >
                            <IconsContainer>
                                <IconPlay className="icon" onClick={handleWatch} />
                                <IconAdd className="icon" />
                                <IconLike className="icon" />
                                <IconDisLike className="icon" />
                            </IconsContainer>
                            <ItemInfoTop>
                                <SpanHour>1 Hour 14 mins</SpanHour>
                                <SpanLimit>+16</SpanLimit>
                                <SpanYear>1999</SpanYear>
                            </ItemInfoTop>
                            <ItemInfoDescription>
                                {`${movie.original_title ? movie.original_title : movie.name}`}
                                <ItemInfoGenre>
                                    Action
                                </ItemInfoGenre>
                            </ItemInfoDescription>
                            {/* */}
                        </ItemInfo>
                    </>
                )
            }
            {/* <p>  {`${movie.original_title}`}</p> */}

        </Item>
    )
}

export default index