"use client";
import {use, useState} from "react";
import useFetch from "../../../hooks/useFetch";
import NotFound from "./not-found";
import FavoriteButton from "./FavoriteButton";

export default function MoviePage({params}) {
    const {id} = use(params);
    const {data, loading, error} = useFetch(`/api/filmy`);

    if (loading)
        return <p>wczytywanie...</p>;
    if (error)
        return <p>BŁĄD: {error}</p>;

    const movie = data.find((m) => m.id == id);
    if (!movie)
        return <NotFound/>
    return (
        <div>
            <p>Film: {movie.title}</p>
            <p>Rok: {movie.year}</p>
            <p>Gatunek: {movie.genre}</p>
            <FavoriteButton/>
        </div>
    )
}