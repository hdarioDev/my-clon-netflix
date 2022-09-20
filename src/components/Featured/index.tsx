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
    SelectType

} from './styles'

const DEFAULT_IMAGE = 'https://surtido.pe/wp-content/uploads/2021/05/Shingeki-no-kyojin-Endo-obu-za-warudo-netflix-peliculas-trailers-live-action-1024x576.jpg';
// const DEFAULT_IMAGE = "https://indiehoy.com/wp-content/uploads/2021/07/tyler-rake.jpg";
const TITLE_MOVIE = 'https://occ-0-3111-2433.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABSYkfln-wVEwKGG0OCP9i5Mg3G93Df45g7a9OGbh8ywlJr2ZekWHGmimiywRh3vw_Vk-qVWiji1naEBuNHLm9bmN4OeqiDD1SKbvmXejjC11.png?r=d4b';

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
            <ImageBg
                src={DEFAULT_IMAGE}
                alt='Featured'
            />
            <Info>
                <ImageTitleMovie
                    src={TITLE_MOVIE}
                    alt='Info'
                />
                <Description>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores accusamus, quia, animi repudiandae minus quae atque corporis repellat pariatur doloribus labore delectus iste ea aliquam reiciendis. Ex
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