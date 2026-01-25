import promoImg from "../assets/asian-woman-man-with-winter-clothes-1.png";

export default function NeuralUniverse() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-6xl px-6 pt-0 pb-16 md:pb-20">
   
        <div className="md:hidden py-14 flex flex-col items-center text-center">
          <p className="text-[11px] tracking-[0.25em] font-bold text-[#BDBDBD]">
            SUMMER 2020
          </p>

          <h3 className="mt-4 text-[34px] font-bold leading-[1.1] text-[#252B42]">
            Part of the Neural <br /> Universe
          </h3>

          <p className="mt-5 text-[13px] leading-6 text-[#737373] max-w-[270px] font-bold">
            We know how large objects will act, but things on a small scale.
          </p>

          <div className="mt-8 flex flex-col gap-4 w-full max-w-[220px]">
            <button className="h-10 rounded-md bg-[#2DC071] text-white text-xs font-bold">
              BUY NOW
            </button>

            <button className="h-10 rounded-md border border-[#2DC071] text-[#2DC071] text-xs font-bold">
              Learn More
            </button>
          </div>

          <div className="mt-10 w-full flex justify-center">
            <img
              src={promoImg}
              alt="Part of the Neural Universe"
              className="w-[290px] h-auto object-contain"
            />
          </div>
        </div>

        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-14">
          <div className="flex justify-center md:justify-start">
            <img
              src={promoImg}
              alt="Part of the Neural Universe"
              className="w-full max-w-[520px] object-contain"
            />
          </div>

          <div className="text-[#252B42]">
            <p className="text-sm tracking-[0.2em] text-[#BDBDBD] font-bold">
              SUMMER 2020
            </p>

            <h3 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
              Part of the Neural <br /> Universe
            </h3>

            <p className="mt-6 text-base font-bold text-[#737373] leading-7 max-w-md">
              We know how large objects will act, <br />
              but things on a small scale.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="bg-[#2DC071] text-white font-bold px-10 py-3 rounded-md text-sm">
                BUY NOW
              </button>

              <button className="border border-[#2DC071] text-[#2DC071] font-bold px-10 py-3 rounded-md text-sm">
                READ MORE
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
