import ProductCard from "./ProductCard";

import p1 from "../assets/bestseller-1.png";
import p2 from "../assets/bestseller-2.png";
import p3 from "../assets/bestseller-3.png";
import p4 from "../assets/bestseller-4.png";
import p5 from "../assets/bestseller-5.png";
import p6 from "../assets/bestseller-6.png";
import p7 from "../assets/bestseller-7.png";
import p8 from "../assets/bestseller-8.png";

const products = [
  { img: p1 },
  { img: p2 },
  { img: p3 },
  { img: p4 },
  { img: p5 },
  { img: p6 },
  { img: p7 },
  { img: p8 },
].map((p) => ({
  ...p,
  title: "Graphic Design",
  dept: "English Department",
  oldPrice: "$16.48",
  price: "$6.48",
}));

export default function FeaturedProducts() {
  return (
    <section className="flex flex-col items-center py-20">
    
      <p className="text-2xl font-bold text-[#737373]">Featured Products</p>

      <h2 className="mt-2 text-3xl font-bold text-[#252B42] tracking-wide">
        BESTSELLER PRODUCTS
      </h2>

      <p className="mt-2 text-xl font-medium text-[#737373]">
        Problems trying to resolve the conflict between
      </p>

      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-16">
        {products.map((p, i) => (
          <ProductCard
            key={i}
            img={p.img}
            title={p.title}
            dept={p.dept}
            oldPrice={p.oldPrice}
            price={p.price}
          />
        ))}
      </div>
    </section>
  );
}
