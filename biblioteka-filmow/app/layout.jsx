'use client';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { usePathname } from "next/navigation";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

function Nav() {
  const pages = [
    "/",
    "/movies"
  ]
  const path = usePathname();
  return (
    <div>
      {pages.map((page) => (
        <Link key={page} href={page} style={path == page ? {color: "red"} : {}}>{page}<br/></Link>
      ))}
    </div>
  )
}

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body><Nav/>{children}</body>
    </html>
  );
}
