import React, { useRef, useState } from 'react'
import { Movie } from '../../interfaces/moviesInterface'
import Item from '../Item'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import {
    List,
    ListTitle,
    Wrapper,
    ArrowBackIcon,
    ArrowNextIcon,
    ContainerItem
} from './styles'
interface Props {
    title: string
    movies: Movie[]
}


const index = ({ title, movies }: Props) => {

    const listRef = useRef<HTMLDivElement>(null)
    const [isMoved, setIsMoved] = useState(false)
    const [slideNumber, setSlideNumber] = useState(0)

    const handleClick = (direction: string) => {
        setIsMoved(true)
        let distance = listRef.current!.getBoundingClientRect().x - 50
        if (slideNumber == 1 && direction === 'left') {
            setIsMoved(false)
        }

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
            <ListTitle> {title}</ListTitle>
            <Wrapper>
                {
                    isMoved &&
                    <ArrowBackIcon onClick={() => handleClick('left')} >
                        <ArrowBackIosIcon />
                    </ArrowBackIcon>
                }
                <ContainerItem ref={listRef}>
                    {movies.map((movie, index) => (
                        <Item key={index} index={index} movie={movie} />
                    ))}
                </ContainerItem>
                <ArrowNextIcon onClick={() => handleClick('right')} >
                    <ArrowForwardIosIcon />
                </ArrowNextIcon>
            </Wrapper>
        </List>
    )
}

export default index