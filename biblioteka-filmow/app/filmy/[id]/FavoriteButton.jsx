'use client';
import {useState} from "react";

export default function FavoriteButton() {
    const [favorite, setFavorite] = useState(false);
    return (
        <button onClick={() => setFavorite(prev => !prev)}>
            {favorite ? "Usuń z ulubionych" : "Dodaj do ulubionych"}
        </button>
    )
}