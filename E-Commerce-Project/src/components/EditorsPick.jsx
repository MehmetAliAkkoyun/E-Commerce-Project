import menImg from "../assets/men.png";
import womenImg from "../assets/women.png";
import accessoriesImg from "../assets/accessories.png";
import kidsImg from "../assets/kids.png";

function PickCard({ img, label, variant }) {
  const sizeClasses = {
    men: "w-[500px] h-[520px]",
    women: "w-[380px] h-[520px]",
    small: "w-[240px] h-[250px]",
  };

  return (
    <div
      className={`relative overflow-hidden bg-[#F6F6F6] ${sizeClasses[variant]}`}
    >
      <img
        src={img}
        alt={label}
        className="w-full h-full object-cover object-center"
      />

      <div className="absolute left-6 bottom-6">
        <button
          className="
            bg-white
            px-10 py-3
            text-s
            font-extrabold
            tracking-[0.15em]
            text-[#252B42]
          "
        >
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

      <div className="mt-14 flex gap-8">
        <PickCard img={menImg} label="MEN" big align="left" />
        <PickCard img={womenImg} label="WOMEN" big align="left" />

        <div className="flex flex-col gap-8">
          <PickCard img={accessoriesImg} label="ACCESSORIES" />
          <PickCard img={kidsImg} label="KIDS" />
        </div>
      </div>
    </section>
  );
}
