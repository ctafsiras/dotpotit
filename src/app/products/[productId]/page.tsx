"use client";

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';

export default function ProductDetailPage() {
  const [product, setProduct] = useState<any>(null);
  const params = useParams();
  const { productId } = params;

  useEffect(() => {
    if (productId) {
      // Fetch product details from API
      const fetchProduct = async () => {
        try {
          const response = await fetch(`https://dotpotit-backend.vercel.app/api/products/${productId}`);
          if (response.ok) {
            const data = await response.json();
            setProduct(data);
          }
        } catch (error) {
          console.error('Error fetching product:', error);
        }
      };

      fetchProduct();
    }
  }, [productId]);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8">
        <p className="text-center text-xl text-gray-600">Loading product details...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <img src={product.imageUrl} alt={product.name} className="w-full h-96 object-cover" />
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-600 text-lg mb-4">{product.description}</p>
          <div className="flex justify-between items-center mb-4">
            <span className="text-2xl font-bold text-blue-600">${product.price.toFixed(2)}</span>
            <span className="text-lg text-gray-500">{product.category.name}</span>
          </div>
          <div className="mt-4 text-sm text-gray-400">
            <p>Created: {new Date(product.createdAt).toLocaleDateString()}</p>
            <p>Updated: {new Date(product.updatedAt).toLocaleDateString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
