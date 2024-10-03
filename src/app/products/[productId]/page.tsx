"use client";

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';

export default function ProductDetailPage() {
  const [product, setProduct] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const params = useParams();
  const { productId } = params;

  useEffect(() => {
    if (productId) {
      fetchProduct();
    }
  }, [productId]);

  const fetchProduct = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`https://dotpotit-backend.vercel.app/api/products/${productId}`);
      if (response.ok) {
        const data = await response.json();
        setProduct(data);
      }
    } catch (error) {
      console.error('Error fetching product:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddToCart = async () => {
    setIsAddingToCart(true);
    try {
      const quantity = 1;
      const response = await fetch('https://dotpotit-backend.vercel.app/api/cart/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({ productId, quantity }),
      });

      if (response.ok) {
        console.log('Product added to cart successfully');
        // You can add a toast notification or some other UI feedback here
      } else {
        console.error('Failed to add product to cart');
        // Handle error (e.g., show error message to user)
      }
    } catch (error) {
      console.error('Error adding product to cart:', error);
      // Handle error (e.g., show error message to user)
    } finally {
      setIsAddingToCart(false);
    }
  };

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <p className="text-center text-xl text-gray-600">Loading product details...</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8">
        <p className="text-center text-xl text-gray-600">Product not found</p>
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
          <button
            onClick={handleAddToCart}
            disabled={isAddingToCart}
            className={`w-full ${
              isAddingToCart ? 'bg-gray-400' : 'bg-green-500 hover:bg-green-600'
            } text-white font-bold py-2 px-4 rounded transition duration-300`}
          >
            {isAddingToCart ? 'Adding to Cart...' : 'Add to Cart'}
          </button>
          <div className="mt-4 text-sm text-gray-400">
            <p>Created: {new Date(product.createdAt).toLocaleDateString()}</p>
            <p>Updated: {new Date(product.updatedAt).toLocaleDateString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
