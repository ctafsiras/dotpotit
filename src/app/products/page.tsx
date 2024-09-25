"use client";

import ProductCard from '@/components/product-card';
import { useState, useEffect } from 'react';
import Loading from '../loading';

export default function ProductsPage() {
  const [products, setProducts] = useState<any[]>([]);
  const [showingProducts, setShowingProducts] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading]=useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
        setIsLoading(true)
      try {
        const response = await fetch('https://dotpotit-backend.vercel.app/api/products');
        if (response.ok) {
          const data = await response.json();
          console.log(data)
          setProducts(data);
          setShowingProducts(data)
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      }finally{
        setIsLoading(false)
      }
    };

    fetchProducts();
  }, []);

  const handleSearch = () => {
    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setShowingProducts(filteredProducts);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">All Products</h1>
      
      <div className="mb-8">
        <div className="flex justify-center">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button
            onClick={handleSearch}
            className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Search
          </button>
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
  );
}
