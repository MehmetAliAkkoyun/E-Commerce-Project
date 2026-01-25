import manImg from "../assets/man-on-green-background.png";

export default function VitaClassic() {
  return (
    <section className="relative w-full bg-[#23856D] overflow-hidden">
  
      <div className="md:hidden relative mx-auto px-6 pt-14 pb-0 text-white text-center">
        <p className="text-xs tracking-[0.25em] font-bold">SUMMER 2020</p>

        <h2 className="mt-4 text-4xl font-bold leading-tight">
          Vita Classic <br /> Product
        </h2>

        <p className="mt-5 text-sm text-white/90 leading-6 max-w-xs mx-auto font-medium">
          We know how large objects will act,
          <br />
          but things on a small scale.
        </p>

        <div className="mt-7 text-2xl font-bold">$16.48</div>

     
        <div className="mt-6 flex items-center justify-between">
          <button
            className="w-12 h-12 flex items-center justify-center text-white/90 select-none"
            aria-label="prev"
          >
            <span className="text-5xl leading-none">‹</span>
          </button>

          <button className="bg-[#2DC071] px-8 py-3 text-xs font-bold rounded-md min-w-[160px]">
            ADD TO CART
          </button>

          <button
            className="w-12 h-12 flex items-center justify-center text-white/90 select-none"
            aria-label="next"
          >
            <span className="text-5xl leading-none">›</span>
          </button>
        </div>

        <div className="relative mt-10 pb-[360px]">
        
        </div>

        <img
          src={manImg}
          alt="Vita Classic Product"
          className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[320px] h-auto object-contain pointer-events-none"
        />
      </div>

      <div className="hidden md:block relative h-[520px] md:h-[650px]">
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

          <div className="absolute right-0 bottom-0 w-[48%] h-full pointer-events-none">
            <img
              src={manImg}
              alt="Vita Classic Product"
              className="absolute right-0 bottom-0 h-[620px] w-auto object-contain"
            />
          </div>

          <div className="absolute left-1/2 -translate-x-1/2 bottom-8 flex items-center">
            <span className="w-14 h-[3px] bg-white" />
            <span className="w-14 h-[3px] bg-white/40" />
          </div>
        </div>

        <button
          className="absolute left-10 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-white/90 select-none"
          aria-label="prev"
        >
          <span className="text-6xl leading-none">‹</span>
        </button>

        <button
          className="absolute right-10 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-white/90 select-none"
          aria-label="next"
        >
          <span className="text-6xl leading-none">›</span>
        </button>
      </div>
    </section>
  );
}
