"use client";
import React, { useState } from "react";
import { Search, User, ShoppingCart, Menu } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Dining", href: "#" },
  { label: "Tea & Coffee", href: "#" },
  { label: "Interior", href: "#" },
  { label: "Garden", href: "#" },
  { label: "Gifting", href: "#" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full flex items-center justify-between px-4 md:px-8 py-5 border-b bg-[#E8E3D9] sticky top-0 z-50 shadow-sm">
      <div className="flex flex-1 items-center md:hidden">
        <button
          className="flex items-center text-gray-dark mr-2"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Open menu"
        >
          <Menu className="h-7 w-7" />
        </button>
        <div className="flex-1 flex justify-center">
          <span className="text-2xl font-extrabold tracking-tight italic text-accent">
            Wabi of Living
          </span>
        </div>
      </div>
      <div className="hidden md:flex items-center gap-8 w-full">
        <div className="text-3xl font-extrabold tracking-tight italic text-accent min-w-max">
          Wabi of Living
        </div>
        <nav className="flex-1 flex justify-center space-x-6 text-base font-medium text-gray-dark">
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href} className="hover:underline">
              {link.label}
            </Link>
          ))}
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
      <div className="flex items-center gap-6 text-gray-dark md:hidden">
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
      {/* モバイルメニュー */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black/40 z-30 flex justify-start md:hidden">
          <div className="bg-beige-light w-3/4 max-w-xs h-full shadow-lg p-6 flex flex-col gap-8 animate-slide-in">
            <nav className="flex flex-col gap-6 text-lg font-medium text-gray-dark">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="hover:underline"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex-1" onClick={() => setMenuOpen(false)} />
        </div>
      )}
    </header>
  );
};

export default Header;
