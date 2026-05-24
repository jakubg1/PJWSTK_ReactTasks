import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Nav() {
  const pages = [
    "/",
    "/filmy"
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