import React from "react";
import { Search, User, ShoppingCart } from "lucide-react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full flex items-center justify-between px-8 py-5 border-b bg-beige-light sticky top-0 z-10 shadow-sm">
      <div className="text-3xl font-extrabold tracking-tight italic text-accent">
        Wabi of Living
      </div>
      <div className="flex items-center gap-8">
        <nav className="space-x-8 text-base font-medium text-gray-dark">
          <Link href="#" className="hover:underline">
            Home
          </Link>
          <Link href="#" className="hover:underline">
            Dining
          </Link>
          <Link href="#" className="hover:underline">
            Tea & Coffee
          </Link>
          <Link href="#" className="hover:underline">
            Interior
          </Link>
          <Link href="#" className="hover:underline">
            Garden
          </Link>
          <Link href="#" className="hover:underline">
            Gifting
          </Link>
        </nav>
        <div className="flex items-center gap-6 text-gray-dark">
          <Link href="#" className="hover:text-accent transition-colors">
            <Search className="h-5 w-5" />
          </Link>
          <Link href="#" className="hover:text-accent transition-colors">
            <User className="h-5 w-5" />
          </Link>
          <Link href="#" className="hover:text-accent transition-colors">
            <ShoppingCart className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
