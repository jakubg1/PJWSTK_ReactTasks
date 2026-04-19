import {NextResponse} from "next/server";
import Zod from "zod";

let movies = [
  { id: 1, title: 'Oppenheimer',       year: 2023, genre: 'Dramat'  },
  { id: 2, title: 'Dune: Czesc druga', year: 2024, genre: 'Sci-Fi'  },
  { id: 3, title: 'Past Lives',        year: 2023, genre: 'Romans'  },
  { id: 4, title: 'Poor Things',       year: 2023, genre: 'Komedia' },
];

const postSchema = Zod.object({
    title: Zod.string().min(2),
    year: Zod.int().min(1888).max(2030),
    genre: Zod.string()
});

export async function GET(request, {params}) {
    const params2 = await params;
    const id = parseInt(params2.id);
    if (!id)
        return NextResponse.json(movies);
    const movie = movies.find((movie) => movie.id == id);
    if (!movie) {
        return NextResponse.json(
            {error: "Movie not found"},
            {status: 404}
        );
    }
    return NextResponse.json(movie, {status: 201});
}

export async function POST(request) {
    const body = await request.json();
    const result = postSchema.safeParse(body);
    if (!result.success) {
        return NextResponse.json(
            {error: "Validation failed", details: result.error},
            {status: 400}
        );
    }
    const newMovie = {id: Date.now(), ...body};
    movies.push(newMovie);
    return NextResponse.json(newMovie, {status: 201});
}