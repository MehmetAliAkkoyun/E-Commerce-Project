import { useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Star, Heart, ShoppingCart, Eye } from "lucide-react";


import p1 from "../assets/bestseller-1.png";
import p2 from "../assets/bestseller-2.png";
import p3 from "../assets/bestseller-3.png";
import p4 from "../assets/bestseller-4.png";

import hooli from "../assets/brands/hooli.svg";
import lyft from "../assets/brands/lyft.svg";
import leaf from "../assets/brands/leaf.svg";
import stripe from "../assets/brands/stripe.svg";
import aws from "../assets/brands/aws.svg";
import reddit from "../assets/brands/reddit.svg";

const mockProducts = [
  { id: 1, title: "Floating Phone", price: 1139.33, img: p1 },
  { id: 2, title: "Graphic Design", price: 16.48, img: p2 },
  { id: 3, title: "Graphic Design", price: 16.48, img: p3 },
  { id: 4, title: "Graphic Design", price: 16.48, img: p4 },
];

function Stars() {
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={14} className={i < 4 ? "fill-[#F3CD03] text-[#F3CD03]" : "text-[#BDBDBD]"} />
      ))}
    </div>
  );
}

function ColorDots() {
  return (
    <div className="flex items-center gap-2">
      <span className="w-3 h-3 rounded-full bg-[#23A6F0]" />
      <span className="w-3 h-3 rounded-full bg-[#23856D]" />
      <span className="w-3 h-3 rounded-full bg-[#E77C40]" />
      <span className="w-3 h-3 rounded-full bg-[#252B42]" />
    </div>
  );
}

export default function ProductDetailPage() {
  const { id } = useParams();
  const productId = Number(id);

  const product = useMemo(() => {
    return mockProducts.find((p) => p.id === productId) || mockProducts[0];
  }, [productId]);

  const [activeTab, setActiveTab] = useState("desc");
  const [activeImg, setActiveImg] = useState(product.img);

  const thumbs = [product.img, p2, p3];

  return (
    <main className="w-full bg-white">
  
      <section className="w-full bg-white">
        <div className="max-w-6xl mx-auto px-6 pt-6">
          <div className="text-xs font-bold text-[#737373] flex items-center gap-2">
            <Link to="/" className="text-[#252B42] hover:underline">
              Home
            </Link>
            <span className="text-[#BDBDBD]">{">"}</span>
            <Link to="/shop" className="hover:underline">
              Shop
            </Link>
          </div>
        </div>
      </section>

  
      <section className="w-full bg-white">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
           
            <div>
              <div className="relative bg-[#F6F6F6] overflow-hidden">
                <img
                  src={activeImg}
                  alt={product.title}
                  className="w-full h-[320px] md:h-[420px] object-cover"
                />

             
                <button
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white/90"
                  aria-label="prev"
                  type="button"
                >
                  <span className="text-5xl leading-none">‹</span>
                </button>
                <button
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white/90"
                  aria-label="next"
                  type="button"
                >
                  <span className="text-5xl leading-none">›</span>
                </button>
              </div>

              <div className="mt-4 flex gap-4">
                {thumbs.map((t, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveImg(t)}
                    className="bg-[#F6F6F6] w-20 h-20 overflow-hidden"
                  >
                    <img src={t} alt="thumb" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

          
            <div className="text-[#252B42]">
              <h1 className="text-xl font-bold">{product.title}</h1>

              <div className="mt-3 flex items-center gap-3">
                <Stars />
                <span className="text-xs font-bold text-[#737373]">10 Reviews</span>
              </div>

              <div className="mt-4 text-2xl font-bold">
                ${product.price.toFixed(2)}
              </div>

              <div className="mt-2 text-sm font-bold text-[#737373]">
                Availability : <span className="text-[#23856D]">In Stock</span>
              </div>

              <p className="mt-6 text-sm font-semibold text-[#737373] leading-6 max-w-md">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
                RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent.
              </p>

              <div className="mt-6 h-px bg-[#E6E6E6]" />

              <div className="mt-6">
                <ColorDots />
              </div>

              <div className="mt-8 flex items-center gap-3">
                <button className="h-11 px-6 bg-[#23A6F0] text-white text-sm font-bold rounded-md">
                  Select Options
                </button>

                <button className="h-11 w-11 rounded-full border border-[#E6E6E6] grid place-items-center">
                  <Heart size={18} className="text-[#252B42]" />
                </button>

                <button className="h-11 w-11 rounded-full border border-[#E6E6E6] grid place-items-center">
                  <ShoppingCart size={18} className="text-[#252B42]" />
                </button>

                <button className="h-11 w-11 rounded-full border border-[#E6E6E6] grid place-items-center">
                  <Eye size={18} className="text-[#252B42]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

 
      <section className="w-full bg-white border-t border-[#E6E6E6]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-center gap-6 md:gap-10 py-6 text-sm font-bold text-[#737373]">
            <button
              className={activeTab === "desc" ? "text-[#252B42]" : ""}
              onClick={() => setActiveTab("desc")}
              type="button"
            >
              Description
            </button>
            <button
              className={activeTab === "info" ? "text-[#252B42]" : ""}
              onClick={() => setActiveTab("info")}
              type="button"
            >
              Additional Information
            </button>
            <button
              className={activeTab === "rev" ? "text-[#252B42]" : ""}
              onClick={() => setActiveTab("rev")}
              type="button"
            >
              Reviews (0)
            </button>
          </div>
        </div>
      </section>

   
      <section className="w-full bg-white">
        <div className="max-w-6xl mx-auto px-6 py-10">
          {activeTab === "desc" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
              <div className="md:col-span-1 bg-[#F6F6F6] overflow-hidden">
                <img src={p3} alt="desc" className="w-full h-[260px] object-cover" />
              </div>

              <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <h3 className="text-base font-bold text-[#252B42]">
                    the quick fox jumps over
                  </h3>
                  <p className="mt-4 text-sm font-semibold text-[#737373] leading-6">
                    Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
                    RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent.
                  </p>
                  <p className="mt-4 text-sm font-semibold text-[#737373] leading-6">
                    Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
                    RELIT official consequent door ENIM RELIT Mollie.
                  </p>
                </div>

                <div>
                  <h3 className="text-base font-bold text-[#252B42]">
                    the quick fox jumps over
                  </h3>
                  <ul className="mt-4 text-sm font-semibold text-[#737373] leading-7">
                    <li>{">"} the quick fox jumps over the lazy dog</li>
                    <li>{">"} the quick fox jumps over the lazy dog</li>
                    <li>{">"} the quick fox jumps over the lazy dog</li>
                    <li>{">"} the quick fox jumps over the lazy dog</li>
                  </ul>

                  <h3 className="mt-8 text-base font-bold text-[#252B42]">
                    the quick fox jumps over
                  </h3>
                  <ul className="mt-4 text-sm font-semibold text-[#737373] leading-7">
                    <li>{">"} the quick fox jumps over the lazy dog</li>
                    <li>{">"} the quick fox jumps over the lazy dog</li>
                    <li>{">"} the quick fox jumps over the lazy dog</li>
                    <li>{">"} the quick fox jumps over the lazy dog</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeTab === "info" && (
            <p className="text-sm font-semibold text-[#737373]">
              Additional information content…
            </p>
          )}

          {activeTab === "rev" && (
            <p className="text-sm font-semibold  text-[#737373]">
              No reviews yet.
            </p>
          )}
        </div>
      </section>

   
      <section className="w-full bg-white">
        <div className="max-w-6xl mx-auto px-6 pb-10">
          <h2 className="text-base font-bold text-[#252B42]">BESTSELLER PRODUCTS</h2>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
            {mockProducts.slice(0, 8).map((p) => (
              <div key={p.id} className="bg-white">
                <div className="bg-[#F6F6F6]">
                  <img src={p.img} alt={p.title} className="w-full h-[240px] object-cover" />
                </div>
                <div className="pt-6 text-center">
                  <h4 className="text-sm font-bold text-[#252B42]">Graphic Design</h4>
                  <p className="mt-2 text-xs font-bold text-[#737373]">English Department</p>
                  <div className="mt-3 flex items-center justify-center gap-2 text-sm font-bold">
                    <span className="text-[#BDBDBD] line-through">$16.48</span>
                    <span className="text-[#23856D]">$6.48</span>
                  </div>
                  <div className="mt-3 flex justify-center">
                    <ColorDots />
                  </div>
                </div>
              </div>
            ))}
          </div>

      
          <div className="mt-16 bg-white py-10">
            <div className="flex flex-col items-center gap-10 md:flex-row md:justify-between">
              <img src={hooli} alt="Hooli" className="h-10 w-auto object-contain opacity-70" />
              <img src={lyft} alt="Lyft" className="h-10 w-auto object-contain opacity-70" />
              <img src={leaf} alt="Leaf" className="h-9 w-auto object-contain opacity-70" />
              <img src={stripe} alt="Stripe" className="h-10 w-auto object-contain opacity-70" />
              <img src={aws} alt="AWS" className="h-9 w-auto object-contain opacity-70" />
              <img src={reddit} alt="Reddit" className="h-10 w-auto object-contain opacity-70" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}