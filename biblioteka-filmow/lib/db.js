let movies = [
  { id: 1, title: 'Oppenheimer',       year: 2023, genre: 'Dramat'  },
  { id: 2, title: 'Dune: Czesc druga', year: 2024, genre: 'Sci-Fi'  },
  { id: 3, title: 'Past Lives',        year: 2023, genre: 'Romans'  },
  { id: 4, title: 'Poor Things',       year: 2023, genre: 'Komedia' },
];

export function getFilms() {
    return [...movies]
}

export function getFilm(id) {
    let result = movies.filter(movie => movie.id == id)
    return result.length == 1 ? result[0] : null
}

export function addFilm({title, year, genre}) {
    let movie = {id: Date.now(), title, year, genre}
    movies.push(movie)
    return movie
}

export function deleteFilm(id) {
    movies = movies.filter(movie => movie.id != id)
}