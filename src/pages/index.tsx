import { Data } from "@/model/interface";
import data from "../../public/data.json";
import ProductCard from "@/components/ProductCard";
import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import Header from "@/components/Header";

export default function Home({ data }: { data: Data[] }) {
  const [search, setSearch] = useState<undefined | string>(undefined);
  const [list, setList] = useState(data.slice(0, 20));
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    if (!search) setList(data);
    const searchedProducts = data
      .filter(
        (d) =>
          d.product.name
            .toLowerCase()
            .includes(search?.toLocaleLowerCase() || "") &&
          d.product.archive === false
      )
      .slice(0, showMore ? -1 : 20);
    // .filter((d) => d.category.id === 1);
    setList(searchedProducts);
  }, [data, search, showMore]);

  return (
    <main>
      <Header />
      <Navigation />

      <div className="flex justify-center my-8">
        <input
          className="py-1 px-3 text-zinc-900 max-w-80 mx-3 w-full border-zinc-600 border-[3px] rounded-lg"
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <section className="flex justify-center my-10 mx-3">
        <div className="flex justify-center flex-wrap max-w-[1200px] gap-5">
          {list.map((d) => {
            return <ProductCard key={d.product.id} data={d} />;
          })}
        </div>
      </section>
      {!showMore && list.length >= 20 && (
        <div className="flex justify-center mb-20">
          <button
            className="bg-zinc-600 px-4 py-2 rounded-lg hover:bg-zinc-500 text-lg"
            onClick={() => setShowMore(true)}
          >
            Prikaži sve
          </button>
        </div>
      )}
    </main>
  );
}

export async function getStaticProps() {
  return {
    props: {
      data,
    },
  };
}
