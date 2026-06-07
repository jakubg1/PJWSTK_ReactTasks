import {useEffect, useRef, useState} from "react";
import {useFilmState, useFilmDispatch} from "../../context/FilmContext";
import useFetch from "../../hooks/useFetch";
import Link from "next/link";

export const revalidate = 60;

export default async function MovieList({params}) {
    const state = useFilmState()
    const dispatch = useFilmDispatch()

    const [refreshKey, setRefreshKey] = useState(0);
    const searchRef = useRef(null);
    const {data, loading, error} = useFetch(`/api/filmy?v=${refreshKey}`);

    useEffect(() => {
        searchRef.current?.focus()
    }, [])

    function refresh() {
        setRefreshKey(oldKey => oldKey + 1);
    }

    function search() {
        dispatch({type: "SET_QUERY", payload: searchRef.current?.value})
    }

    return (
        <div>
            <input ref={searchRef} onChange={search} placeholder="Wyszukaj..."></input>
            {
                state.films.map(movie => (
                    <div key={movie.id}>
                        <Link href={`/filmy/${movie.id}`}>{movie.title}</Link>
                    </div>
                ))
            }
            <span>Szukanie: {state.query}</span>
            <button id="refresh" onClick={refresh}>Odśwież</button>
        </div>
    )
}