"use client";

import ProductCard from '@/components/product-card';
import Sidebar from '@/components/Sidebar';
import { useState, useEffect } from 'react';
import Loading from '../loading';

export default function ProductsPage() {
  const [products, setProducts] = useState<any[]>([]);
  const [showingProducts, setShowingProducts] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [sortBy, setSortBy] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedPriceRanges, setSelectedPriceRanges] = useState<string[]>([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('https://dotpotit-backend.vercel.app/api/products');
        if (response.ok) {
          const data = await response.json();
          setProducts(data);
          setShowingProducts(data);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleSearch = () => {
    filterProducts(searchTerm, selectedCategories, selectedPriceRanges);
  };

  const handleSort = (sortOption: string) => {
    setSortBy(sortOption);
    let sortedProducts = [...showingProducts];
    switch (sortOption) {
      case 'name':
        sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'price-high-to-low':
        sortedProducts.sort((a, b) => b.price - a.price);
        break;
      case 'price-low-to-high':
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
    }
    setShowingProducts(sortedProducts);
  };

  const filterProducts = (search: string, categories: string[], priceRanges: string[]) => {
    let filteredProducts = products;

    if (search) {
      filteredProducts = filteredProducts.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.description.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (categories.length > 0) {
      filteredProducts = filteredProducts.filter((product) => categories.includes(product.category.name));
    }

    if (priceRanges.length > 0) {
      filteredProducts = filteredProducts.filter((product) => {
        return priceRanges.some(range => {
          const [min, max] = range.split('-').map(Number);
          return product.price >= min && (max ? product.price <= max : true);
        });
      });
    }

    setShowingProducts(filteredProducts);
  };

  const handleFilterChange = (newCategories: string[], newPriceRanges: string[]) => {
    setSelectedCategories(newCategories);
    setSelectedPriceRanges(newPriceRanges);
    filterProducts(searchTerm, newCategories, newPriceRanges);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="container mx-auto px-2 md:px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">All Products</h1>
      <div className="flex relative">
        {/* Mobile filter button */}
        <button
          className="md:hidden fixed bottom-4 right-4 z-10 bg-blue-500 text-white p-3 rounded-full shadow-lg"
          onClick={toggleSidebar}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
          </svg>
        </button>

        {/* Sidebar */}
        <div className={`md:block ${isSidebarOpen ? 'block' : 'hidden'} fixed inset-0 z-20 md:relative md:inset-auto`}>
          <Sidebar
            selectedCategories={selectedCategories}
            selectedPriceRanges={selectedPriceRanges}
            onFilterChange={handleFilterChange}
            onClose={() => setIsSidebarOpen(false)}
          />
        </div>

        <div className="flex-1">
          <div className="mb-8 flex justify-between items-center">
            <div className="flex">
              <div className="flex">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="max-w-36 md:max-w-48 px-2 md:px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button
                  onClick={handleSearch}
                  className="px-2 md:px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Search
                </button>
              </div>
            </div>
            <div className="w-28 md:w-48">
              <select
                value={sortBy}
                onChange={(e) => handleSort(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Sort by</option>
                <option value="name">Name</option>
                <option value="price-high-to-low">Price: High to Low</option>
                <option value="price-low-to-high">Price: Low to High</option>
              </select>
            </div>
          </div>

          {isLoading ? <Loading/> : (
            showingProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {showingProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="text-xl text-gray-600">No products found.</p>
                <p className="mt-2 text-gray-500">Try adjusting your search or check back later for new items.</p>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}