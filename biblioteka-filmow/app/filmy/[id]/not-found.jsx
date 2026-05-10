import Link from "next/link";

export default function NotFound() {
    return (
        <div>
            <h1>Nie znaleziono</h1>
            <Link href="/">Powrót</Link>
        </div>
    )
}