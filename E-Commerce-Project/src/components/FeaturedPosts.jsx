import featured1 from "../assets/featured1.png";
import featured2 from "../assets/featured2.png";
import featured3 from "../assets/featured3.png";

import coolicon from "../assets/coolicon.png"; 
import vector from "../assets/Vector.png";    
function PostCard({ image }) {
  return (
    <article className="w-[328px] bg-white border border-[#E6E6E6] shadow-[0_2px_10px_rgba(0,0,0,0.08)]">
    
      <div className="relative w-full h-[300px] overflow-hidden">
        <img src={image} alt="featured" className="w-full h-full object-cover" />

        <span className="absolute top-5 left-5 bg-[#E74040] text-white text-xs font-bold px-3 py-1">
          NEW
        </span>
      </div>

      <div className="px-6 pt-6 pb-7">
      
        <div className="flex items-center gap-4 text-sm">
          <a className="text-[#8EC2F2]" href="#!">
            Google
          </a>
          <a className="text-[#737373]" href="#!">
            Trending
          </a>
          <a className="text-[#737373]" href="#!">
            New
          </a>
        </div>

      
        <h3 className="mt-3 text-[20px] leading-7 font-montserrat text-[#252B42]">
          Loudest à la Madison #1 <br />(L&apos;integral)
        </h3>

        <p className="mt-3 text-sm font-semibold leading-6 text-[#737373]">
          We focus on ergonomics and meeting you where you work. It&apos;s only a keystroke away.
        </p>

        <div className="mt-5 flex items-center justify-between text-xs text-[#737373]">
          <div className="flex items-center gap-2">
            <img src={coolicon} alt="date" className="w-4 h-4" />
            <span>22 April 2021</span>
          </div>

          <div className="flex items-center gap-2">
            <img src={vector} alt="comments" className="w-4 h-4" />
            <span>10 comments</span>
          </div>
        </div>

        <div className="mt-6 flex items-center gap-2 text-sm font-bold text-[#737373]">
          <span>Learn More</span>
          <span className="text-[#23A6F0] text-lg leading-none">›</span>
        </div>
      </div>
    </article>
  );
}

export default function FeaturedPosts() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-6xl mx-auto px-6 py-20">
        
        <div className="text-center">
          <p className="text-sm font-bold text-[#23A6F0]">Practice Advice</p>
          <h2 className="mt-3 text-[40px] leading-[50px] font-bold text-[#252B42]">
            Featured Posts
          </h2>
          <p className="mt-4 text-sm font-semibold leading-6 text-[#737373] max-w-[470px] mx-auto">
            Problems trying to resolve the conflict between <br />
            the two major realms of Classical physics: Newtonian mechanics
          </p>
        </div>

       
        <div className="mt-16 flex flex-col lg:flex-row items-center justify-center gap-8">
          <PostCard image={featured1} />
          <PostCard image={featured2} />
          <PostCard image={featured3} />
        </div>
      </div>
    </section>
  );
}
