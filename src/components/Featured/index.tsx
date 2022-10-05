import React from 'react'
import {
    Featured,
    ImageBg,
    ImageTitleMovie,
    Info,
    Description,
    ContainerButtons,
    ButtonPlay,
    IconPlay,
    PlayDescription,
    ButtonMore,
    IconInfo,
    InfoDescription,

    Category,
    TypeFeatured,
    SelectType,
    ImageTitleContainer

} from './styles'

interface Props {
    type?: 'movie' | 'serie'
}

const index = ({ type }: Props) => {

    return (
        <Featured>
            {
                type && (
                    <Category>
                        <TypeFeatured >{
                            type === 'movie' ? 'Movies' : 'Series'
                        }</TypeFeatured>
                        <SelectType name="genre" id="genre">
                            <option>Genre</option>
                            <option value="adventure">Adventure</option>
                            <option value="Comedy">Comedy</option>
                        </SelectType>
                    </Category>
                )
            }
            <ImageBg></ImageBg>
            <Info>
                <ImageTitleContainer>
                    <ImageTitleMovie />
                </ImageTitleContainer>

                <Description>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores accusamus, quia, animi repudiandae minus quae atque corporis repellat pariatur doloribus.
                </Description>
                <ContainerButtons>
                    <ButtonPlay>
                        <IconPlay />
                        <PlayDescription> Play</PlayDescription>
                    </ButtonPlay>
                    <ButtonMore>
                        <IconInfo />
                        <InfoDescription >Info</InfoDescription>
                    </ButtonMore>
                </ContainerButtons>
            </Info>
        </Featured>
    )
}

export default index