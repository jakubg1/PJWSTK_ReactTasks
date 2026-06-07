"use client"
export default function Error({error, reset}) {
    return (
        <>
            <p>BŁĄD: {error.message}</p>;
            <button onClick={() => reset()}>Odśwież</button>
        </>
    )
}