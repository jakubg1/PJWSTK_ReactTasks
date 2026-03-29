const FILMS = [
  { id: 1, title: 'Oppenheimer',       year: 2023, genre: 'Dramat',  rating: 5, watched: true  },
  { id: 2, title: 'Dune: Część druga', year: 2024, genre: 'Sci-Fi',  rating: 4, watched: false },
  { id: 3, title: 'Past Lives',        year: 2023, genre: 'Romans',  rating: 5, watched: true  },
  { id: 4, title: 'Poor Things',       year: 2023, genre: 'Komedia', rating: 4, watched: false },
]

const RATINGS = ["☆☆☆☆☆", "★☆☆☆☆", "★★☆☆☆", "★★★☆☆", "★★★★☆", "★★★★★"]

function RatingStars({rating = 3}) {
  return (
    <span>{RATINGS[rating]}</span>
  )
}

const GENRE_COLORS = {
  "Dramat": "maroon",
  "Sci-Fi": "navy",
  "Romans": "gold",
  "Komedia": "green"
}

function GenreBadge({genre}) {
  return (
    <span style={{color: GENRE_COLORS[genre] ?? "gray"}}>{genre}</span>
  )
}

function WatchedBadge({watched}) {
  if (!watched)
    return null;
  return (
    <span>✓ Obejrzany</span>
  )
}

function FilmCard({title, year, genre, rating, watched}) {
  return (
    <div class="FilmCard">
      <h3>{title} ({year})</h3>
      <GenreBadge genre={genre}/>
      <RatingStars rating={rating}/>
      <WatchedBadge watched={watched}/>
    </div>
  )
}

function FilmList({title, films}) {
  return (
    <div class="FilmList">
      <h2>{title}</h2>
      <ul>
        {films.map((f) => <FilmCard key={f.id} title={f.title} year={f.year} genre={f.genre} rating={f.rating} watched={f.watched}/>)}
      </ul>
    </div>
  )
}

function App() {
  return (
    <div class="App">
      <FilmList title="Obejrzane" films={FILMS.filter((f) => f.watched)}/>
      <FilmList title="Do obejrzenia" films={FILMS.filter((f) => !f.watched)}/>
    </div>
  )
}

export default App
