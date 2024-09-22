"use client";

import ProductCard from '@/components/product-card';
import { useState, useEffect } from 'react';

const dummyProducts: any[] = [
  {
    id: '1',
    name: 'Smartphone X',
    description: 'Latest model with advanced features',
    price: 999.99,
    categoryId: 'electronics',
    imageUrl:"https://prd.place/400",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '2',
    name: 'Designer Watch',
    description: 'Elegant timepiece for all occasions',
    price: 299.99,
    categoryId: 'accessories',
    imageUrl:"https://prd.place/400",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '3',
    name: 'Wireless Earbuds',
    description: 'High-quality sound with long battery life',
    price: 149.99,
    categoryId: 'electronics',
    imageUrl:"https://prd.place/400",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '4',
    name: 'Leather Backpack',
    description: 'Stylish and durable for everyday use',
    price: 79.99,
    categoryId: 'accessories',
    imageUrl:"https://prd.place/400",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '5',
    name: 'Smart Home Hub',
    description: 'Control your home with voice commands',
    price: 129.99,
    categoryId: 'electronics',
    imageUrl:"https://prd.place/400",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export default function ProductsPage() {
  const [products, setProducts] = useState<any[]>(dummyProducts);
  const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     // Fetch products from API
//     const fetchProducts = async () => {
//       try {
//         const response = await fetch('/api/products');
//         if (response.ok) {
//           const data = await response.json();
//           setProducts(data);
//         }
//       } catch (error) {
//         console.error('Error fetching products:', error);
//       }
//     };

//     fetchProducts();
//   }, []);

  const handleSearch = () => {
    const filteredProducts = dummyProducts.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setProducts(filteredProducts);
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

      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-8">
          <p className="text-xl text-gray-600">No products found.</p>
          <p className="mt-2 text-gray-500">Try adjusting your search or check back later for new items.</p>
        </div>
      )}
    </div>
  );
}
