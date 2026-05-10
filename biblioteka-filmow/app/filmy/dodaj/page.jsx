"use client";
import {useFormik} from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
    title: Yup.string().min(2, "Tytuł musi mieć przynajmniej 2 znaki"),
    year: Yup.int("Rok musi być liczbą").min(1888, "Film nie może być starszy niż 1888").max(2030, "Film nie może być nowszy od 2030"),
    genre: Yup.string()
})

export default function MovieForm({params}) {
    const formik = useFormik({
        initialValues: {
            title: "",
            year: 0,
            genre: ""
        },
        validationSchema: validationSchema,
        onSubmit: (values) => console.log(values)
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <div>
                <input id="title" {...formik.getFieldProps("title")}/>
                {formik.touched.title && formik.errors.title && (
                    <span id="title-error" role="alert">{formik.errors.title}</span>
                )}
            </div>
            <div>
                <input id="year" type="number" {...formik.getFieldProps("year")}/>
                {formik.touched.year && formik.errors.year && (
                    <span id="year-error" role="alert">{formik.errors.year}</span>
                )}
            </div>
            <div>
                <input id="genre" {...formik.getFieldProps("genre")}/>
                {formik.touched.genre && formik.errors.genre && (
                    <span id="genre-error" role="alert">{formik.errors.genre}</span>
                )}
            </div>
            <button type="submit" disabled={formik.isSubmitting}>Wyślij</button>
        </form>
    )
}