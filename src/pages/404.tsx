import Link from "next/link";

export default function Page() {
  return (
    <div className="flex justify-center items-center h-full w-full absolute px-5">
      <div className="flex flex-col items-center gap-3 text-center">
        <h1 className="text-rose-800">404 Error</h1>
        <p className="text-zinc-500 text-base md:text-lg font-bold">
          Poslužitelj ne može pronaći traženi resurs.
        </p>
        <Link
          href="/"
          className="mt-8 font-bold bg-zinc-600 hover:bg-zinc-500 px-4 py-2 rounded-lg"
        >
          Povratak
        </Link>
      </div>
    </div>
  );
}
