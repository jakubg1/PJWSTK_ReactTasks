export const initialFilmState = {films: [], loading: false, error: null, query: "", favorites: [], notifications: []}

export function filmReducer(state, action) {
    switch (action.type) {
        case "FETCH_START":
            return {...state, loading: true, error: null}
        case "FETCH_SUCCESS":
            return {...state, loading: false, films: action.payload}
        case "FETCH_ERROR":
            return {...state, loading: false, error: action.payload}
        case "SET_QUERY":
            return {...state, query: action.payload}
        case "TOGGLE_FAVORITE":
            if (state.favorites.includes(action.payload))
                return {...state, favorites: state.favorites.filter(id => id != action.payload)}
            else
                return {...state, favorites: [...state.favorites, action.payload]}
        case "ADD_FILM":
            return {...state, films: [...state.films, action.payload]}
        case "ADD_NOTIFICATION":
            return {...state, notifications: [...state.notifications, {id: Date.now(), message: action.message, type: action.type}]}
        case "DISMISS_NOTIFICATION":
            return {...state, notifications: state.notifications.filter(n => n.id != action.payload)}
        default:
            throw new Error(`Unknown action type: ${action.type}`)
    }
}