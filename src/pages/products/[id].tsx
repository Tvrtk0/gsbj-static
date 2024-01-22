/* eslint-disable @next/next/no-img-element */
import { Product as ProductModel } from "@/model/interface";
import data from "../../../public/gsbj-db.json";
import Navigation from "@/components/Navigation";
import Header from "@/components/Header";

export async function getStaticPaths() {
  const paths = data._embedded.products.map((product: ProductModel) => ({
    params: { id: product.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  const product = data._embedded.products.find((p) => p.id === +params.id);
  return {
    props: {
      product,
    },
  };
}

export default function Product({ product }: { product: ProductModel }) {
  const { name, imageUrl, price, description, archive } = product;
  return (
    <div className="flex flex-col items-center mb-10">
      <Header />
      <Navigation />

      <div className="lg:flex lg:gap-3 mt-14">
        <div className="flex justify-center mx-4 mb-4 grow basis-0">
          <img
            src={imageUrl}
            alt={name}
            className="max-w-80 sm:max-w-96 w-full self-start"
          />
        </div>

        <div className="mx-5 grow basis-0">
          <h2>{name}</h2>
          <div className="text-zinc-300 text-lg">{price} EUR</div>
          <pre className="mt-5 text-base font-sans max-w-96 sm:max-w-[600px] w-full text-wrap">
            {description}
          </pre>
        </div>
      </div>
    </div>
  );
}
