import gokhanImg from "../assets/gokhan.jpg";
import maliImg from "../assets/mali.jpg";
import janeImg from "../assets/jane.jpg";
import floydImg from "../assets/floyd.jpg";

const team = [
  { name: "Gökhan Özdemir", role: "Project Manager", img: gokhanImg },
  { name: "Mehmet Ali Akkoyun", role: "Full Stack Developer", img: maliImg },
  { name: "Jane Cooper", role: "Founder", img: janeImg },
  { name: "Floyd Miles", role: "Founder", img: floydImg },
];

function TeamCard({ img, role, name }) {
  return (
    <div className="flex flex-col items-center text-center bg-white py-12 px-8 w-full max-w-[240px]">
      <div className="w-28 h-28 rounded-full overflow-hidden bg-[#E6E6E6]">
        <img src={img} alt={name} className="w-full h-full object-cover" />
      </div>

      <p className="mt-6 text-xs font-bold text-[#23A6F0]">{role}</p>
      <h4 className="mt-2 text-sm font-bold text-[#252B42]">{name}</h4>

      <p className="mt-3 text-xs text-[#737373] max-w-[180px] leading-5">
        the quick fox jumps <br /> over the lazy dog
      </p>
    </div>
  );
}

export default function TeamPage() {
  return (
    <main className="w-full bg-[#FAFAFA] py-16">
      <section className="max-w-6xl mx-auto px-6">
        <div className="py-16 px-6">
          <h1 className="text-4xl md:text-4xl font-bold text-[#252B42] text-center">
            Meet Our Team
          </h1>

          <p className="mt-4 text-sm md:text-sm text-[#737373] text-center max-w-xl mx-auto leading-6">
            Problems trying to resolve the conflict between{" "}
            <br className="hidden md:block" />
            the two major realms of Classical physics: Newtonian mechanics
          </p>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-10 place-items-center">
            {team.map((m) => (
              <TeamCard key={m.name} {...m} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
