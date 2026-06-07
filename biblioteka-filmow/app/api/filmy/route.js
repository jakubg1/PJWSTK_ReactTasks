import {getFilms, addFilm} from "@/lib/db";
import {NextResponse} from "next/server";
import Zod from "zod";

const postSchema = Zod.object({
    title: Zod.string().min(2),
    year: Zod.int().min(1888).max(2030),
    genre: Zod.string()
});

export async function GET(request) {
    return NextResponse.json(getFilms(), {status: 201});
}

export async function POST(request) {
    const body = await request.json();
    const result = postSchema.safeParse(body);
    if (!result.success)
        return NextResponse.json({error: "Validation failed", details: result.error}, {status: 400});
    return NextResponse.json(addFilm(body), {status: 201});
}