import heroImg from "../assets/shop-hero-1-product-slide-1.jpg";

export default function HeroSlider() {
  return (
    <section className="relative w-full bg-cyan-500 text-white overflow-hidden">
      <div className="relative w-full h-[650px] md:h-[750px]">
   
        <div className="hidden md:block absolute inset-y-0 right-0 w-[55%] overflow-hidden">
          <img
            src={heroImg}
            alt="Hero"
            className="h-full w-full object-cover object-left md:-translate-x-80"
          />
        </div>

        <div className="md:hidden absolute right-0 bottom-0 h-full w-[55%] pointer-events-none">
          <img
            src={heroImg}
            alt="Hero"
            className="h-full w-full object-cover object-left"
          />
        </div>

        <div className="relative z-10 h-full w-full">
          <div className="mx-auto max-w-6xl px-6 h-full flex items-center">
      
            <div className="w-full md:max-w-md flex flex-col gap-5 items-center text-center md:items-start md:text-left">
              <span className="text-sm tracking-widest">SUMMER 2020</span>

              <h1 className="text-5xl md:text-7xl font-bold leading-none">
                <span className="md:whitespace-nowrap">
                  NEW <span className="hidden md:inline"> </span>
                  <span className="md:inline">COLLECTION</span>
                </span>
                <span className="md:hidden block">COLLECTION</span>
              </h1>

              <p className="text-base leading-7 text-white/90 max-w-sm md:max-w-none">
                We know how large objects will act, but things on a small scale.
              </p>

              <button className="mt-2 bg-green-500 px-7 py-3 w-fit font-medium">
                SHOP NOW
              </button>
            </div>
          </div>
        </div>

        <button
          className="flex absolute left-4 md:left-3 top-1/2 -translate-y-1/2 w-12 h-12 items-center justify-center text-white/90 select-none"
          aria-label="prev"
        >
          <span className="text-6xl leading-none">‹</span>
        </button>

        <button
          className="flex absolute right-4 md:right-3 top-1/2 -translate-y-1/2 w-12 h-12 items-center justify-center text-white/90 select-none"
          aria-label="next"
        >
          <span className="text-6xl leading-none">›</span>
        </button>

        <div className="absolute left-1/2 -translate-x-1/2 bottom-8 flex items-center">
          <span className="w-14 h-[3px] bg-white" />
          <span className="w-14 h-[3px] bg-white/40" />
        </div>
      </div>
    </section>
  );
}
