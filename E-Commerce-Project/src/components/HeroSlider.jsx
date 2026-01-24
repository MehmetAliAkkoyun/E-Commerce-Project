import heroImg from "../assets/shop-hero-1-product-slide-1.jpg";


export default function HeroSlider() {
  return (
    <section className="relative w-full bg-cyan-500 text-white overflow-hidden">
  
      <div className="relative h-[650px] md:h-[750px] w-full">

        <div className="hidden md:block absolute inset-y-0 right-0 w-[55%]">
          <img
            src={heroImg}
            alt="Hero"
            className="h-full w-full object-cover object-left"
          />
        </div>

       
        <div className="relative z-10 h-full w-full flex justify-center">
          <div className="w-full max-w-6xl px-6 h-full flex items-center">
            <div className="flex flex-col gap-5 max-w-md">
              <span className="text-sm tracking-widest">SUMMER 2020</span>

              <h1 className="text-6xl md:text-7xl font-bold leading-none whitespace-nowrap">
                NEW COLLECTION
              </h1>


              <p className="text-base leading-7 text-white/90">
                We know how large objects will act, but things on a small scale.
              </p>

              <button className="mt-2 bg-green-500 px-7 py-3 w-fit font-medium">
                SHOP NOW
              </button>
            </div>
          </div>
        </div>

        <button className="hidden md:flex absolute left-3 top-1/2 -translate-y-1/2 w-14 h-14 items-center justify-center text-9xl text-white/90">
  ‹
</button>

<button className="hidden md:flex absolute right-3 top-1/2 -translate-y-1/2 w-14 h-14 items-center justify-center text-9xl text-white/90">
  ›
</button>


       
        <div className="hidden md:block absolute left-1/2 -translate-x-1/2 bottom-8 w-16 h-1 bg-white/90" />
      </div>
    </section>
  );
}
