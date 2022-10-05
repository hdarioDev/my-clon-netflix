import { useEffect, useState } from "react"
import requests from "../utils/requests"


export const useMovies = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [moviesState, setMoviesState] = useState<any>(
        {
            netflixOriginals: [],
            trendingNow: [],
            topRated: [],
            actionMovies: [],
            comedyMovies: [],
            horrorMovies: [],
            romanceMovies: [],
            documentaries: [],
        }
    )


    const getData = async () => {

        const [
            netflixOriginals,
            trendingNow,
            topRated,
            actionMovies,
            comedyMovies,
            horrorMovies,
            romanceMovies,
            documentaries,
        ] = await Promise.all([
            fetch(requests.fetchNetflixOriginals).then((res) => res.json()),
            fetch(requests.fetchTrending).then((res) => res.json()),
            fetch(requests.fetchTopRated).then((res) => res.json()),
            fetch(requests.fetchActionMovies).then((res) => res.json()),
            fetch(requests.fetchComedyMovies).then((res) => res.json()),
            fetch(requests.fetchHorrorMovies).then((res) => res.json()),
            fetch(requests.fetchRomanceMovies).then((res) => res.json()),
            fetch(requests.fetchDocumentaries).then((res) => res.json()),
        ])

        setMoviesState({
            netflixOriginals: netflixOriginals.results,
            trendingNow: trendingNow.results,
            topRated: topRated.results,
            actionMovies: actionMovies.results,
            comedyMovies: comedyMovies.results,
            horrorMovies: horrorMovies.results,
            romanceMovies: romanceMovies.results,
            documentaries: documentaries.results,
        })
        setIsLoading(false)
    }

    useEffect(() => {
        getData()
    }, [])

    return {
        ...moviesState,
        isLoading
    }
}