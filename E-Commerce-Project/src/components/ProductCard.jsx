export default function ProductCard({ img, title, dept, oldPrice, price }) {
  return (
    <div className="flex flex-col items-center text-center">

      <div className="w-[239px] h-[427px] bg-[#F6F6F6] overflow-hidden">
        <img src={img} alt={title} className="w-full h-full object-cover" />
      </div>

      <h3 className="mt-6 text-sm font-semibold text-[#252B42]">{title}</h3>
      <p className="mt-2 text-xs font-medium text-[#737373]">{dept}</p>

    
      <div className="mt-3 flex items-center gap-2 text-sm font-semibold">
        <span className="text-[#BDBDBD] line-through">{oldPrice}</span>
        <span className="text-[#23856D]">{price}</span>
      </div>

     
      <div className="mt-4 flex items-center gap-2">
        <span className="w-2.5 h-2.5 rounded-full bg-[#23A6F0]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#23856D]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#E77C40]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#252B42]" />
      </div>
    </div>
  );
}
