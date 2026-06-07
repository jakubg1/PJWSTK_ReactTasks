import {getFilm, deleteFilm} from "@/lib/db";
import {NextResponse} from "next/server";

export async function GET(request, {params}) {
    params = await params;
    const id = parseInt(params.id);
    const movie = getFilm(id);
    if (!movie)
        return NextResponse.json({error: "Movie not found"}, {status: 404});
    return NextResponse.json(movie, {status: 201});
}

export async function DELETE(request, {params}) {
    params = await params;
    const id = parseInt(params.id);
    const movie = getFilm(id);
    if (!movie)
        return NextResponse.json({error: "Movie not found"}, {status: 404});
    deleteFilm(id);
    return NextResponse.json(movie, {status: 201});
}