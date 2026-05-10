"use client";
import {useEffect, useRef, useState} from "react";
import useFetch from "../../hooks/useFetch";
import Link from "next/link";

export default function MovieList({params}) {
    const [refreshKey, setRefreshKey] = useState(0);
    const [searchPhrase, setSearchPhrase] = useState("");
    const searchRef = useRef(null);
    const {data, loading, error} = useFetch(`/api/filmy?v=${refreshKey}`);

    useEffect(() => {
        searchRef.current?.focus()
    }, [])

    function refresh() {
        setRefreshKey(oldKey => oldKey + 1);
    }

    function search() {
        setSearchPhrase(searchRef.current?.value);
    }
    
    if (loading)
        return <p>wczytywanie...</p>;
    if (error)
        return <p>BŁĄD: {error}</p>;

    return (
        <div>
            <input ref={searchRef} onChange={search} placeholder="Wyszukaj..."></input>
            {
                data.map(movie => (
                    <div key={movie.id}>
                        <Link href={`/filmy/${movie.id}`}>{movie.title}</Link>
                    </div>
                ))
            }
            <span>Szukanie: {searchPhrase}</span>
            <button id="refresh" onClick={refresh}>Odśwież</button>
        </div>
    )
}