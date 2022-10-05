import React from 'react'
import AcUnitIcon from '@material-ui/icons/AcUnit';

import {
    Home
} from "./styles"
import NavBar from '../../components/NavBar';
import Featured from '../../components/Featured';
import List from '../../components/List';
import requests from '../../utils/requests';
import { useMovies } from '../../hooks/useMovies';
import Footer from '../../components/Footer';

const DEFAULT_IMAGE = "https://assets.nflxext.com/ffe/siteui/vlv3/a795ee10-8c6d-467c-8159-254be2b69013/047313be-8d6a-46dd-9396-bd286fa260ad/BO-es-20220912-popsignuptwoweeks-perspective_alpha_website_large.jpg";

interface Props {
    netflixOriginals: any
    trendingNow: any
    topRated: any
    actionMovies: any
    comedyMovies: any
    horrorMovies: any
    romanceMovies: any
    documentaries: any
    products: any
}


const Index = () => {
    const {
        netflixOriginals,
        trendingNow,
        topRated,
        actionMovies,
        comedyMovies,
        horrorMovies,
        romanceMovies,
        documentaries,
        isLoading
    } = useMovies()
    console.log("trendingNow ", trendingNow);
    console.log("isLoading , ", isLoading);
    console.log("topRated ", topRated);


    console.log("netflixOriginals ", netflixOriginals);

    return (
        <Home>
            {/* <img src={DEFAULT_IMAGE} alt="Imagen de fondo" /> */}
            <NavBar />
            <Featured />
            <List title="Trending Now" movies={trendingNow} />
            <List title="Top Rated" movies={topRated} />
            <List title="Action Thrillers" movies={actionMovies} />
            <List title="Comedies" movies={comedyMovies} />
            <List title="Scary Movies" movies={horrorMovies} />
            <List title="Romance Movies" movies={romanceMovies} />
            <List title="Documentaries" movies={documentaries} />
            <Footer />
        </Home>

    )
}

export default Index

