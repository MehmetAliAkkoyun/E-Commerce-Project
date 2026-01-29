import menImg from "../assets/men.png";
import womenImg from "../assets/women.png";
import accessoriesImg from "../assets/accessories.png";
import kidsImg from "../assets/kids.png";

function PickCard({ img, label, variant = "small" }) {
  const sizeClasses = {
    men: "w-full md:w-[500px] h-[600px]",
    women: "w-full md:w-[380px] h-[600px]",
    small: "w-full md:w-[240px] h-[290px]",
  };

  return (
    <div
      className={`relative overflow-hidden ${sizeClasses[variant]}`}
    >
      <img
        src={img}
        alt={label}
        className="w-full h-full object-cover object-top"
      />

      <div className="absolute left-6 bottom-6">
        <button className="bg-white px-10 py-3 text-sm font-extrabold tracking-[0.15em] text-[#252B42]">
          {label}
        </button>
      </div>
    </div>
  );
}


export default function EditorsPick() {
  return (
    <section className="flex flex-col items-center py-20">
      <h2 className="text-2xl font-bold text-[#252B42] tracking-wide">
        EDITOR&apos;S PICK
      </h2>

      <p className="mt-2 text-sm font-semibold text-gray-400">
        Problems trying to resolve the conflict between
      </p>

      
      <div className="mt-14 w-full max-w-6xl px-6 flex flex-col md:flex-row gap-8">
        <PickCard img={menImg} label="MEN" variant="men" />
        <PickCard img={womenImg} label="WOMEN" variant="women" />

        <div className="flex flex-col gap-8 w-full md:w-auto">
          <PickCard img={accessoriesImg} label="ACCESSORIES" variant="small" />
          <PickCard img={kidsImg} label="KIDS" variant="small" />
        </div>
      </div>
    </section>
  );
}
