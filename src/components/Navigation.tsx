import Link from "next/link";
import { useRouter } from "next/router";

export default function Navigation() {
  const router = useRouter();

  return (
    <div className="flex justify-center gap-4 text-zinc-300">
      <Link
        className={`${
          router.pathname === "/" ? " underline" : ""
        } hover:text-zinc-400`}
        href="/"
      >
        Proizvodi
      </Link>
      <Link
        className={`${
          router.pathname === "/info" ? " underline" : ""
        }  hover:text-zinc-400`}
        href="/info"
      >
        Kontakt
      </Link>
    </div>
  );
}
