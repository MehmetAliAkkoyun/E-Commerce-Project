import { useState } from "react";

import {
  Phone,
  Mail,
  Instagram,
  Facebook,
  Twitter,
  User,
  Search,
  ShoppingCart,
  Heart,
  Youtube,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full">
      <div className="hidden md:block w-full bg-[#252B42] text-white text-xs">
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

      <div className="relative bg-white">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-xl font-bold text-[#252B42]">Bandage</span>

          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-500">
             <Link to="/">Home</Link>

            <Link to="/shop" className="flex items-center gap-1">
              Shop <ChevronDown size={16} className="mt-[1px]" />
            </Link>

            <a href="#">About</a>
            <a href="#">Blog</a>
            <a href="#">Contact</a>
            <a href="#">Pages</a>
          </nav>

          <div className="flex items-center gap-5 text-blue-500">
            <div className="hidden md:flex items-center gap-2 text-sm">
              <User size={16} />
              <span>Login / Register</span>
            </div>

            <div className="hidden md:flex items-center gap-5 text-sm">
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

            <div className="flex md:hidden items-center gap-5 text-[#252B42]">
              <Search size={20} />
              <ShoppingCart size={20} />
              <button
                type="button"
                onClick={() => setOpen((s) => !s)}
                aria-label="menu"
              >
                {open ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

       
        {open && (
          <div className="md:hidden border-t border-[#E6E6E6] bg-white">
            <div className="px-6 py-10 flex flex-col items-center gap-10">
             
              <nav className="flex flex-col items-center gap-7 text-2xl text-[#737373]">
                <Link
                  to="/"
                  onClick={() => setOpen(false)}
                  className="text-[#252B42] font-semibold"
                >
                  Home
                </Link>

                <Link to="/shop" onClick={() => setOpen(false)}>
                  Shop
                </Link>

                <a href="#" onClick={() => setOpen(false)}>
                  About
                </a>
                <a href="#" onClick={() => setOpen(false)}>
                  Blog
                </a>

                <a
                  href="#"
                  onClick={() => setOpen(false)}
                  className="text-[#252B42] font-semibold"
                >
                  Contact
                </a>

                <a href="#" onClick={() => setOpen(false)}>
                  Pages
                </a>
              </nav>

             
              <a
                href="#"
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 text-[#23A6F0] text-lg font-medium"
              >
                <User size={18} />
                Login / Register
              </a>

              
              <div className="flex flex-col items-center gap-6 text-[#23A6F0]">
                <Search size={22} />

                <div className="relative">
                  <ShoppingCart size={22} />
                  <span className="absolute -top-2 -right-3 text-xs">1</span>
                </div>

                <div className="relative">
                  <Heart size={22} />
                  <span className="absolute -top-2 -right-3 text-xs">1</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
