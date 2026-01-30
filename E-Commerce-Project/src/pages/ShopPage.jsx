
import { useState } from "react";

import hooli from "../assets/brands/hooli.svg";
import lyft from "../assets/brands/lyft.svg";
import leaf from "../assets/brands/leaf.svg";
import stripe from "../assets/brands/stripe.svg";
import aws from "../assets/brands/aws.svg";
import reddit from "../assets/brands/reddit.svg";

import cat1 from "../assets/category-1.jpg";
import cat2 from "../assets/category-2.jpg";
import cat3 from "../assets/category-3.jpg";
import cat4 from "../assets/category-4.jpg";
import cat5 from "../assets/category-5.jpg";

import p1 from "../assets/bestseller-1.png";
import p2 from "../assets/bestseller-2.png";
import p3 from "../assets/bestseller-3.png";
import p4 from "../assets/bestseller-4.png";
import p5 from "../assets/bestseller-5.png";
import p6 from "../assets/bestseller-6.png";
import p7 from "../assets/bestseller-7.png";
import p8 from "../assets/bestseller-8.png";
import p9 from "../assets/bestseller-3.png";
import p10 from "../assets/bestseller-6.png";
import p11 from "../assets/bestseller-1.png";
import p12 from "../assets/bestseller-4.png";

const categories = [
  { img: cat1, title: "CLOTHS", count: "5 Items" },
  { img: cat2, title: "CLOTHS", count: "5 Items" },
  { img: cat3, title: "CLOTHS", count: "5 Items" },
  { img: cat4, title: "CLOTHS", count: "5 Items" },
  { img: cat5, title: "CLOTHS", count: "5 Items" },
];

const products = [
  { img: p1, title: "Graphic Design", dept: "English Department", old: "$16.48", price: "$6.48" },
  { img: p2, title: "Graphic Design", dept: "English Department", old: "$16.48", price: "$6.48" },
  { img: p3, title: "Graphic Design", dept: "English Department", old: "$16.48", price: "$6.48" },
  { img: p4, title: "Graphic Design", dept: "English Department", old: "$16.48", price: "$6.48" },
  { img: p5, title: "Graphic Design", dept: "English Department", old: "$16.48", price: "$6.48" },
  { img: p6, title: "Graphic Design", dept: "English Department", old: "$16.48", price: "$6.48" },
  { img: p7, title: "Graphic Design", dept: "English Department", old: "$16.48", price: "$6.48" },
  { img: p8, title: "Graphic Design", dept: "English Department", old: "$16.48", price: "$6.48" },
  { img: p9, title: "Graphic Design", dept: "English Department", old: "$16.48", price: "$6.48" },
  { img: p10, title: "Graphic Design", dept: "English Department", old: "$16.48", price: "$6.48" },
  { img: p11, title: "Graphic Design", dept: "English Department", old: "$16.48", price: "$6.48" },
  { img: p12, title: "Graphic Design", dept: "English Department", old: "$16.48", price: "$6.48" },
];

function ViewIconGrid() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <rect x="1" y="1" width="5" height="5" stroke="#252B42" />
      <rect x="10" y="1" width="5" height="5" stroke="#252B42" />
      <rect x="1" y="10" width="5" height="5" stroke="#252B42" />
      <rect x="10" y="10" width="5" height="5" stroke="#252B42" />
    </svg>
  );
}

function ViewIconList() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <rect x="1" y="2" width="14" height="2" fill="#252B42" />
      <rect x="1" y="7" width="14" height="2" fill="#252B42" />
      <rect x="1" y="12" width="14" height="2" fill="#252B42" />
    </svg>
  );
}

function CategoryCard({ img, title, count }) {
  return (
    <div
      className="
        relative w-full overflow-hidden bg-[#F6F6F6]
        h-[320px] md:h-[220px]
      "
    >
      <img
        src={img}
        alt={title}
        className="
          h-full w-full
          object-cover object-top   
          md:object-cover md:object-center
        "
      />

      <div className="absolute inset-0 bg-black/25" />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <p className="text-sm font-bold">{title}</p>
        <p className="text-xs font-bold opacity-90">{count}</p>
      </div>
    </div>
  );
}



function ColorDots() {
  return (
    <div className="mt-3 flex items-center justify-center gap-2">
      <span className="w-2.5 h-2.5 rounded-full bg-[#23A6F0]" />
      <span className="w-2.5 h-2.5 rounded-full bg-[#23856D]" />
      <span className="w-2.5 h-2.5 rounded-full bg-[#E77C40]" />
      <span className="w-2.5 h-2.5 rounded-full bg-[#252B42]" />
    </div>
  );
}

function ProductCard({ img, title, dept, old, price }) {
  return (
    <div className="bg-white">
     
      <div className="w-full bg-white">
        <img
          src={img}
          alt={title}
          className="
            w-full
            h-[360px] sm:h-[320px]
            md:h-[280px]
            object-contain
            md:object-contain
          "
        />
      </div>

      <div className="pt-6 text-center">
        <h4 className="text-sm font-bold text-[#252B42]">{title}</h4>
        <p className="mt-2 text-xs font-bold text-[#737373]">{dept}</p>

        <div className="mt-3 flex items-center justify-center gap-2 text-sm font-bold">
          <span className="text-[#BDBDBD] line-through">{old}</span>
          <span className="text-[#23856D]">{price}</span>
        </div>

        <ColorDots />
      </div>
    </div>
  );
}



export default function ShopPage() {
  const [page, setPage] = useState(1);

  return (
    <main className="w-full bg-white">
  
      <section className="w-full bg-[#FAFAFA]">
        <div className="max-w-6xl mx-auto px-6 py-6">
         
          
        <div className="md:hidden">
          <div className="flex flex-col items-center gap-4 py-2">
            <h1 className="text-2xl font-bold text-[#252B42]">Shop</h1>

            <p className="text-xs font-bold text-[#737373]">
              Home &nbsp; &gt; &nbsp; Shop
            </p>
          </div>
        </div>


          <div className="hidden md:flex items-center justify-between">
            <h1 className="text-2xl font-bold text-[#252B42]">Shop</h1>
            <p className="text-sm font-bold text-[#737373]">
              Home &nbsp; &gt; &nbsp; Shop
            </p>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 md:gap-4">

            {categories.map((c, i) => (
              <CategoryCard key={i} {...c} />
            ))}
          </div>
        </div>
      </section>

      <section className="w-full">
        <div className="max-w-6xl mx-auto px-6 py-10">

          <div className="flex flex-col gap-6 md:gap-4 md:flex-row md:items-center md:justify-between">
            <p className="text-sm font-bold text-[#737373] text-center md:text-left">
              Showing all 12 results
            </p>

            <div className="flex items-center justify-center md:justify-start gap-3">
              <p className="text-sm font-bold text-[#737373]">Views:</p>

              <button
                className="w-12 h-12 border border-[#E6E6E6] rounded-md bg-white flex items-center justify-center"
                aria-label="grid view"
              >
                <ViewIconGrid />
              </button>

              <button
                className="w-12 h-12 border border-[#E6E6E6] rounded-md bg-white flex items-center justify-center"
                aria-label="list view"
              >
                <ViewIconList />
              </button>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-3">
              <select className="h-12 px-4 border border-[#E6E6E6] rounded-md bg-white text-sm text-[#737373]">
                <option>Popularity</option>
                <option>Price: Low</option>
                <option>Price: High</option>
              </select>

              <button className="h-12 px-6 rounded-md bg-[#23A6F0] text-white text-sm font-bold">
                Filter
              </button>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-14">
            {products.map((p, i) => (
              <ProductCard key={i} {...p} />
            ))}
          </div>

          <div className="mt-16 flex justify-center">
            <div className="flex overflow-hidden rounded-md border border-[#E6E6E6]">
              <button className="h-12 min-w-[70px] px-5 text-sm font-bold text-[#BDBDBD] bg-[#F3F3F3]">
                First
              </button>

              {[1, 2, 3].map((n) => (
                <button
                  key={n}
                  onClick={() => setPage(n)}
                  className={`h-12 min-w-[48px] px-5 text-sm font-bold border-l border-[#E6E6E6] ${
                    page === n
                      ? "bg-[#23A6F0] text-white border-[#23A6F0]"
                      : "bg-white text-[#23A6F0]"
                  }`}
                >
                  {n}
                </button>
              ))}

              <button className="h-12 min-w-[70px] px-5 text-sm font-bold text-[#23A6F0] border-l border-[#E6E6E6] bg-white">
                Next
              </button>
            </div>
          </div>

          <section className="w-full bg-white mt-20">
            <div className="max-w-6xl mx-auto px-6 py-14">
              <div className="flex flex-col items-center gap-10 md:flex-row md:justify-between md:gap-0">
                <img src={hooli} alt="Hooli" className="h-12 md:h-10 w-auto object-contain opacity-70" />
                <img src={lyft} alt="Lyft" className="h-12 md:h-10 w-auto object-contain opacity-70" />
                <img src={leaf} alt="Leaf" className="h-11 md:h-9  w-auto object-contain opacity-70" />
                <img src={stripe} alt="Stripe" className="h-12 md:h-10 w-auto object-contain opacity-70" />
                <img src={aws}  alt="AWS"  className="h-11 md:h-9  w-auto object-contain opacity-70" />
                <img src={reddit} alt="Reddit" className="h-12 md:h-10 w-auto object-contain opacity-70" />

              </div>
            </div>
          </section>

        </div>
      </section>
    </main>
  );
}

