import React, { useRef, useState } from 'react'
import Item from '../Item'
import {
    List,
    ListTitle,
    Wrapper,
    ArrowBackIcon,
    ArrowNextIcon,
    ContainerItem
} from './styles'

const index = () => {
    const listRef = useRef<HTMLDivElement>(null)
    const [isMoved, setIsMoved] = useState(false)
    const [slideNumber, setSlideNumber] = useState(0)
    console.log("isMoved ", isMoved);

    const handleClick = (direction: string) => {
        setIsMoved(true)
        let distance = listRef.current!.getBoundingClientRect().x - 50
        console.log("distance ", distance)
        if (direction === 'left' && listRef.current && slideNumber > 0) {
            setSlideNumber(slideNumber - 1)
            listRef.current.style.transform = `translateX(${230 + distance}px)`
        }
        if (direction === 'right' && listRef.current && slideNumber < 5) {
            setSlideNumber(slideNumber + 1)
            listRef.current.style.transform = `translateX(${-230 + distance}px)`
        }
    }
    return (
        <List>
            <ListTitle>Continue to watch</ListTitle>
            <Wrapper>
                {
                    isMoved &&
                    <ArrowBackIcon onClick={() => handleClick('left')} />
                }
                <ContainerItem ref={listRef}>
                    <Item index={0} />
                    <Item index={1} />
                    <Item index={2} />
                    <Item index={3} />
                    <Item index={4} />
                    <Item index={5} />
                    <Item index={6} />
                    <Item index={7} />
                    <Item index={8} />
                    <Item index={9} />
                </ContainerItem>
                <ArrowNextIcon onClick={() => handleClick('right')} />
            </Wrapper>
        </List>
    )
}

export default index