import { Data } from "@/model/interface";
import Link from "next/link";

export default function ProductCard({ data }: { data: Data }) {
  const { id, price, name, archive, imageUrl } = data.product;
  const { categoryName, id: categoryId } = data.category;

  if (archive) return null;

  return (
    <Link
      key={id}
      href={`/products/${id}`}
      className="p-5 w-full max-w-72 md:w-64 relative flex flex-col bg-zinc-800 rounded-md hover:bg-zinc-700 transition-colors pb-10"
    >
      <img alt={name} src={imageUrl} width={"100%"} />
      <h4 className="text-ellipsis line-clamp-2 mt-2" title={name}>
        {name}
      </h4>
      <div className="text-zinc-300 text-sm font-bold p-3 bottom-0 right-0 absolute">
        {price} EUR
      </div>
    </Link>
  );
}
