"use server"
import Zod from "zod";

const postSchema = Zod.object({
    title: Zod.string().min(2).max(100).describe("Niepoprawny tytul"),
    year: Zod.int().min(1888).max(2030).describe("Niepoprawny rok"),
    genre: Zod.string().min(1).describe("Niepoprawny gatunek")
});

export function createFilm(prevState, formData) {

}

export function createFilmSimple(formData) {

}

export function deleteFilmAction(id) {

}