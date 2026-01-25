import { Phone, Mail, Instagram, Facebook, Twitter, User, Search, ShoppingCart, Heart, Youtube } from "lucide-react";


export default function Header() {
  return (
    <header className="w-full">

      <div className="w-full bg-[#252B42] text-white text-xs">
        <div className="max-w-6xl mx-auto px-6 h-10 flex items-center justify-between">
    
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1">
              <Phone size={14} /> (225) 555-0118
            </span>
            <span className="flex items-center gap-1">
              <Mail size={14} /> michelle.rivera@example.com
            </span>
          </div>

       
          <span className="hidden md:block">
            Follow Us and get a chance to win 80% off
          </span>

         
          <div className="flex items-center gap-3">
            <span>Follow Us :</span>
            <Instagram size={14} />
            <Youtube size={14} />
            <Facebook size={14} />
            <Twitter size={14} />
          </div>
        </div>
      </div>

    
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center">
 
  <div className="w-1/4">
    <span className="text-xl font-bold text-[#252B42]">Bandage</span>
  </div>

  <nav className="hidden md:flex items-center gap-6 text-sm text-gray-500 w-1/2">
    <a href="#">Home</a>
    <a href="#" className="flex items-center gap-1">
    <span>Shop</span>
    <svg
      viewBox="0 0 20 20"
      className="w-3.5 h-3.5 translate-y-[1px]"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M6 8l4 4 4-4" />
    </svg>
  </a>
    <a href="#">About</a>
    <a href="#">Blog</a>
    <a href="#">Contact</a>
    <a href="#">Pages</a>
  </nav>

  <div className="flex items-center justify-end gap-5 text-sm text-blue-500 w-1/4">
  
  <div className="flex items-center gap-2">
    <User size={16} />
    <span>Login / Register</span>
  </div>

  <Search size={18} />

  <div className="flex items-center gap-1">
    <ShoppingCart size={18} />
    <span className="text-xs text-blue-500">1</span>
  </div>

  <div className="flex items-center gap-1">
    <Heart size={18} />
    <span className="text-xs text-blue-500">1</span>
  </div>
</div>
</div>
    </header>
  );
}
