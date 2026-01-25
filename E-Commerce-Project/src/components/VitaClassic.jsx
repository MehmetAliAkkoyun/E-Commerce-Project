import manImg from "../assets/man-on-green-background.png";

export default function VitaClassic() {
  return (
    <section className="relative w-full bg-[#23856D] overflow-hidden h-[520px] md:h-[650px]">
     
      <div className="relative mx-auto max-w-6xl px-6 h-full">
       
        <div className="relative z-10 h-full flex items-center">
          <div className="w-full md:w-[52%] text-white">
            <p className="text-sm tracking-[0.2em] font-bold">SUMMER 2020</p>

            <h2 className="mt-6 text-6xl md:text-7xl font-bold leading-[1.05]">
              Vita Classic <br /> Product
            </h2>

            <p className="mt-7 text-sm md:text-base text-white/90 max-w-md leading-7 font-medium">
              We know how large objects will act, We know <br />
              how are objects will act, We know
            </p>

            <div className="mt-10 flex items-center gap-8">
              <span className="text-2xl font-bold">$16.48</span>

              <button className="bg-[#2DC071] px-10 py-4 text-sm font-bold rounded-md min-w-[180px]">
                ADD TO CART
              </button>
            </div>
          </div>
        </div>

        <div className="hidden md:block absolute right-0 bottom-0 w-[48%] h-full pointer-events-none">
          <img
            src={manImg}
            alt="Vita Classic Product"
            className="absolute right-0 bottom-0 h-[620px] w-auto object-contain"
          />
        </div>

        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 bottom-8 items-center">
          <span className="w-14 h-[3px] bg-white" />
          <span className="w-14 h-[3px] bg-white/40" />
        </div>
      </div>

      <button
        className="hidden md:flex absolute left-10 top-1/2 -translate-y-1/2 w-12 h-12 items-center justify-center text-white/90 select-none"
        aria-label="prev"
      >
        <span className="text-6xl leading-none">‹</span>
      </button>

      <button
        className="hidden md:flex absolute right-10 top-1/2 -translate-y-1/2 w-12 h-12 items-center justify-center text-white/90 select-none"
        aria-label="next"
      >
        <span className="text-6xl leading-none">›</span>
      </button>
    </section>
  );
}
