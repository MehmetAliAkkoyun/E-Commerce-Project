import aboutImg from "../assets/aboutus.png";

export default function AboutPage() {
  return (
    <main className="w-full bg-white font-mont">
      <section className="mx-auto max-w-6xl px-6 py-14 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 md:gap-10">
        
          <div className="text-center md:text-left">
            <p className="text-xs font-bold tracking-[0.2em] text-[#252B42]">
              ABOUT COMPANY
            </p>

            <h1 className="mt-4 text-4xl md:text-6xl font-extrabold text-[#252B42] tracking-wide">
              ABOUT US
            </h1>

            <p className="mt-6 text-base md:text-lg text-[#737373] leading-7 max-w-md mx-auto md:mx-0">
              We know how large objects will act,
              <br className="hidden md:block" />
              but things on a small scale
            </p>

            <button className="mt-8 h-12 px-8 rounded-md bg-[#23A6F0] text-white text-sm font-bold">
              Get Quote Now
            </button>
          </div>

          <div className="relative flex justify-center md:justify-end">
            <div className="relative w-full max-w-[520px] h-[420px] md:h-[520px]"></div>
        
             <div className="absolute right-1/2 translate-x-1/2 md:right-12 md:translate-x-0 bottom-10 md:bottom-6
                    w-[320px] h-[320px] md:w-[430px] md:h-[430px]
                    rounded-full bg-[#FCE7E7] z-0" />

            <span className="absolute z-0 w-3 h-3 rounded-full bg-[#A78BFA]
                     right-6 md:right-10 top-10 md:top-20" />
            <span className="absolute z-0 w-4 h-4 rounded-full bg-[#FCE7E7]
                     left-6 md:left-24 bottom-6 md:bottom-24" />

            <img
      src={aboutImg}
      alt="About us"
      className="absolute bottom-0 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-0
                 w-full max-w-[420px] md:max-w-[520px] object-contain z-10"
    />
          </div>
        </div>
      </section>
    </main>
  );
}