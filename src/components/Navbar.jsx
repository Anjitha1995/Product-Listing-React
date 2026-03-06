import React, { useState } from "react";
import {
  Search,
  X,
  RotateCcw,
  SlidersHorizontal,
  Tags,
  ShoppingBag
} from "lucide-react";

export default function Navbar({ updateFilters }) {
  const [category, setCategory] = useState("all");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");

  const categories = ["all", "electronics", "clothing", "accessories"];

  const handleChange = (changedFilter) => {
    const filters = {
      category,
      search,
      sort,
      ...changedFilter
    };

    updateFilters(filters);
  };

  const clearSearch = () => {
    setSearch("");
    handleChange({ search: "" });
  };

  const resetFilters = () => {
    setCategory("all");
    setSearch("");
    setSort("");

    updateFilters({
      category: "all",
      search: "",
      sort: ""
    });
  };

  const hasActiveFilters = search || category !== "all" || sort;

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg">
      <div className="mx-auto max-w-7xl px-4 py-4">

        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

          {/* Logo */}
          <div className="flex items-center gap-3 text-white">

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/20 backdrop-blur text-white shadow-md">
              <ShoppingBag size={20} />
            </div>

            <div>
              <h1 className="text-xl font-bold tracking-tight">
                Product Listing
              </h1>
              <p className="text-xs text-indigo-200">
                Discover great products
              </p>
            </div>

          </div>

          {/* Filters */}
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center">

            {/* Search */}
            <div className="relative min-w-[280px] lg:min-w-[350px]">

              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  handleChange({ search: e.target.value });
                }}
                className="w-full rounded-xl border border-white/30 bg-white py-2.5 pl-11 pr-11 text-sm outline-none focus:ring-2 focus:ring-white/40"
              />

              {search && (
                <button
                  onClick={clearSearch}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  <X size={18} />
                </button>
              )}
            </div>

            {/* Category */}
            <div className="relative">

              <Tags
                size={16}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <select
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
                  handleChange({ category: e.target.value });
                }}
                className="min-w-[170px] appearance-none rounded-xl border border-white/30 bg-white py-2.5 pl-11 pr-8 text-sm outline-none focus:ring-2 focus:ring-white/40"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </option>
                ))}
              </select>

              <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                ▾
              </span>

            </div>

            {/* Sort */}
            <div className="relative">

              <SlidersHorizontal
                size={16}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <select
                value={sort}
                onChange={(e) => {
                  setSort(e.target.value);
                  handleChange({ sort: e.target.value });
                }}
                className="min-w-[170px] appearance-none rounded-xl border border-white/30 bg-white py-2.5 pl-11 pr-8 text-sm outline-none focus:ring-2 focus:ring-white/40"
              >
                <option value="">Sort By</option>
                <option value="priceLow">Price: Low → High</option>
                <option value="priceHigh">Price: High → Low</option>
                <option value="rating">Top Rated</option>
              </select>

              <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                ▾
              </span>

            </div>

            {/* Reset */}
            <button
              onClick={resetFilters}
              disabled={!hasActiveFilters}
              className="flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-indigo-700 transition hover:bg-indigo-100 disabled:bg-gray-200 disabled:text-gray-400"
            >
              <RotateCcw size={16} />
              Reset
            </button>

          </div>
        </div>
      </div>
    </nav>
  );
}