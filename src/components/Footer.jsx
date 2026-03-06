import React from "react";
import { ShoppingBag } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-10 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">

      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-3">

        {/* Logo / Brand */}
        <div className="flex items-center gap-2 text-sm font-semibold">
          <ShoppingBag size={18} />
          <span>Product Listing App</span>
        </div>

        {/* Copyright */}
        <p className="text-sm text-indigo-100">
          © 2026 Product Listing App. All rights reserved.
        </p>

      </div>

    </footer>
  );
}