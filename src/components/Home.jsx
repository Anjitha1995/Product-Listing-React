import React, { useState } from 'react'
import Navbar from './Navbar'
import Products from './Products'
import Footer from './Footer'
import headphones from '../assets/images/products/headphones.png'
import laptop from '../assets/images/products/laptop.png'
import wallet from '../assets/images/products/wallet.png'
import saree from '../assets/images/products/saree.png'
import kurtha from '../assets/images/products/kurtha.png'
import bangles from '../assets/images/products/bangles.png'

export default function Home() {
  const products = [
    {
      id: 1,
      name: 'Boss Headphone',
      price: 100,
      category: "electronics",
      rating: 5,
      image: headphones,
    },
    {
      id: 2,
      name: "Men's Wallet",
      price: 50,
      category: "accessories",
      rating: 4.0,
      image: wallet,
    },
    {
      id: 3,
      name: "Dell Laptop",
      price: 1500,
      category: "electronics",
      rating: 4.5,
      image: laptop,
    },
    {
      id: 4,
      name: "Soft Silk Saree",
      price: 250,
      category: "clothing",
      rating: 3.3,
      image: saree,
    },
    {
      id: 5,
      name: "Men's Kurtha",
      price: 150,
      category: "clothing",
      rating: 3.5,
      image: kurtha,
    },
    {
      id: 6,
      name: "Gold Plated Bangles",
      price: 60,
      category: "accessories",
      rating: 3.3,
      image: bangles,
    }
  ]

  const [filter, setFilter] = useState({
    category: "all",
    search: "",
    sort: ""
  })

  const filteredProducts = products.filter((product) => {
    return (
      product.name
        .toLowerCase()
        .includes(filter.search.trim().toLowerCase()) &&
      (filter.category === "all" || product.category === filter.category)
    )
  })

  const sortedProducts = filteredProducts.sort((a, b) => {
    if (filter.sort === "priceLow") {
      return a.price - b.price
    }
    if (filter.sort === "priceHigh") {
      return b.price - a.price
    }
    if (filter.sort === "rating") {
      return b.rating - a.rating
    }
    return 0
  })

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar updateFilters={setFilter} />
      <main className="flex-grow p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {sortedProducts.map((product) => (
            <Products key={product.id} product={product} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}