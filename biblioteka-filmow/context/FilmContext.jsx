"use client"

import {useReducer, createContext, useContext} from "react"
import {filmReducer, initialFilmState} from "../reducers/filmReducer";

const FilmStateContext = createContext(null)
const FilmDispatchContext = createContext(null)

export function FilmProvider({children}) {
    const [state, dispatch] = useReducer(filmReducer, initialFilmState)

    return (
        <FilmStateContext.Provider value={state}>
            <FilmDispatchContext.Provider value={dispatch}>
                {children}
            </FilmDispatchContext.Provider>
        </FilmStateContext.Provider>
    )
}

export function useFilmState() {
    let context = useContext(FilmStateContext)
    if (!context)
        throw new Error("No context in useFilmState!")
    return context
}

export function useFilmDispatch() {
    let context = useContext(FilmDispatchContext)
    if (!context)
        throw new Error("No context in useFilmDispatch!")
    return context
}