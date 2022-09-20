import React, { useState } from 'react'
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

const IMAGE_ITEM = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFg3RdSQK0l1a6JebKa1wCKQx5Uc3TBkausjnapM_Da-eAhiOh2myj0WgE9RrkdK6mp3s&usqp=CAU'
const TRAILER = "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761"
interface IProps {
    index: number;
}

const index = ({ index }: IProps) => {
    const [isHovered, setIsHovered] = useState(false)
    return (
        <Item
            // style={{ left: index * 225 - 50 }}
            isHovered={isHovered}
            index={index}
            onMouseEnter={() => { setIsHovered(true); console.log({ isHovered }) }}
            onMouseLeave={() => { setIsHovered(false); console.log({ isHovered }, 'CHAUUU ') }}
        >
            <ImageItem src={IMAGE_ITEM} />
            {
                isHovered && (
                    <>
                        <video src={TRAILER} autoPlay={true} loop />
                        <ItemInfo>
                            <IconsContainer>
                                <IconPlay className="icon" />
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
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium libero delectus fugiat non aliquam error consectetur.
                            </ItemInfoDescription>
                            <ItemInfoGenre>
                                Action
                            </ItemInfoGenre>
                        </ItemInfo>
                    </>
                )
            }
        </Item>
    )
}

export default index