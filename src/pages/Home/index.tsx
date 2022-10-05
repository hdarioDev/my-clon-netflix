import React from 'react'
import {
    Home
} from "./styles"
import NavBar from '../../components/NavBar';
import Featured from '../../components/Featured';
import List from '../../components/List';
import { useMovies } from '../../hooks/useMovies';
import Footer from '../../components/Footer';


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

    return (
        <Home>
            {/* <img src={DEFAULT_IMAGE} alt="Imagen de fondo" /> */}
            <NavBar />
            <Featured />
            <List title="Netflix Originals" movies={netflixOriginals} />
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

