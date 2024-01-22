export type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  archive: boolean;
  dateCreated: string;
  lastUpdated: string;
};

export type Category = {
  id: number;
  categoryName: string;
};

export type Data = {
  product: Product;
  category: Category;
};

export type Categories = {
  1: "Satovi i nakit";
  2: "Novčanici i torbe";
  3: "Elektronske cigarete i tekućine";
  4: "PC oprema";
  5: "Noževi";
  6: "Upaljači";
  7: "Lampe";
  8: "Baterijski ulošci";
  9: "Punjači i kablovi";
  10: "Suveniri i pokloni";
  11: "Šalice";
  12: "Sunčane naočale";
  13: "Ostalo";
  19: "Igračke";
  20: "Slušalice i zvučnici";
  21: "Pušački pribor";
  22: "Privjesci";
  24: "Tranzistori FM i Transmiteri";
  26: "Zippo Upaljači";
  27: "e Romobili";
};
