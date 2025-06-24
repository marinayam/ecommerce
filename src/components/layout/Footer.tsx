import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-auto py-10 px-4 bg-[#b8b4b1] text-center text-sm text-white">
      <div className="mb-2">&copy; 2025 Wabi of Living All Rights Reserved</div>
      <div className="flex justify-center gap-6">
        <Link href="#" className="hover:underline">
          About
        </Link>
        <Link href="#" className="hover:underline">
          Privacy Policy
        </Link>
        <Link href="#" className="hover:underline">
          Instagram
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
