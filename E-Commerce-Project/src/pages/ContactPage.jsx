import { Twitter, Facebook, Instagram, Linkedin } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="w-full bg-white">
      <section className="w-full">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <div className="mx-auto w-full max-w-[820px] text-center">
            <h1 className="text-[40px] leading-[1.15] md:text-6xl font-bold text-[#252B42]">
              Get answers
              <br className="md:hidden" /> to all your
              <br /> questions.
            </h1>

            <p className="mt-6 text-sm md:text-base font-medium text-[#737373] leading-6 md:leading-7 max-w-[520px] mx-auto">
              Problems trying to resolve the conflict between the two
              <br className="hidden md:block" />
              major realms of Classical physics:
            </p>

            <button className="mt-8 md:mt-10 h-12 md:h-[52px] px-8 md:px-10 rounded-md bg-[#23A6F0] text-white text-xs md:text-sm font-bold">
              CONTACT OUR COMPANY
            </button>

            <div className="mt-10 md:mt-12 flex items-center justify-center gap-6 text-[#BDBDBD]">
              <a href="#!" aria-label="twitter" className="hover:text-[#23A6F0]">
                <Twitter size={18} />
              </a>
              <a href="#!" aria-label="facebook" className="hover:text-[#23A6F0]">
                <Facebook size={18} />
              </a>
              <a href="#!" aria-label="instagram" className="hover:text-[#23A6F0]">
                <Instagram size={18} />
              </a>
              <a href="#!" aria-label="linkedin" className="hover:text-[#23A6F0]">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
