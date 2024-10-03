"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import jsPDF from "jspdf";

interface CartItem {
  id: string;
  product: {
    id: string;
    name: string;
    price: number;
    imageUrl: string;
  };
  quantity: number;
}

interface User {
  id: string;
  email: string;
  name?: string;
  address?: string;
}

export default function CheckoutPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showBill, setShowBill] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    fetchCartItems();
  }, []);

  const fetchCartItems = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://dotpotit-backend.vercel.app/api/cart",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        setCartItems(data.items);
        setUser(data.user);
      } else {
        console.error("Failed to fetch cart items");
      }
    } catch (error) {
      console.error("Error fetching cart items:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  };

  const handleCheckout = () => {
    setShowBill(true);
  };

  const sendMail = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        "https://dotpotit-backend.vercel.app/api/cart/send-mail",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ message: "Sending email with token" }),
        }
      );

      if (response.ok) {
        console.log("Email sent successfully");
        // You can add further handling here if needed
      } else {
        console.error("Failed to send email");
        // Handle error (e.g., show error message to user)
      }
    } catch (error) {
      console.error("Error sending email:", error);
      // Handle error (e.g., show error message to user)
    }
  };

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">Loading cart items...</div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="grid gap-4 mb-8">
            {cartItems?.map((item) => (
              <div key={item.id} className="flex items-center border-b pb-4">
                <Image
                  src={item.product.imageUrl}
                  alt={item.product.name}
                  width={80}
                  height={80}
                  className="mr-4"
                />
                <div className="flex-grow">
                  <h2 className="text-lg font-semibold">{item.product.name}</h2>
                  <p className="text-gray-600">Quantity: {item.quantity}</p>
                  <p className="text-blue-600">
                    ${item.product.price.toFixed(2)}
                  </p>
                </div>
                <p className="font-bold">
                  ${(item.product.price * item.quantity).toFixed(2)}
                </p>
              </div>
            ))}
          </div>
          <div className="text-right mb-8">
            <p className="text-xl font-bold">
              Total: ${calculateTotal().toFixed(2)}
            </p>
          </div>
          <button
            onClick={handleCheckout}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
          >
            Generate Bill
          </button>
        </>
      )}

      {showBill && (
        <div className="mt-8 p-4 border rounded">
          <h2 className="text-2xl font-bold mb-4">Bill</h2>
          <p>
            <strong>Date:</strong> {new Date().toLocaleDateString()}
          </p>
          <p>
            <strong>Order ID:</strong> {Math.random().toString(36).substr(2, 9)}
          </p>
          <p>
            <strong>Customer Name:</strong> {user?.name || "John Doe"}
          </p>
          <p>
            <strong>Email:</strong> {user?.email || "johndoe@example.com"}
          </p>
          <p>
            <strong>Shipping Address:</strong>{" "}
            {user?.address || "123 Main St, Anytown, USA"}
          </p>
          <div className="mt-4">
            <h3 className="text-xl font-semibold mb-2">Order Summary</h3>
            {cartItems.map((item) => (
              <div key={item.id} className="flex justify-between">
                <span>
                  {item.product.name} (x{item.quantity})
                </span>
                <span>${(item.product.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
            <div className="border-t mt-2 pt-2 font-bold">
              <div className="flex justify-between">
                <span>Total</span>
                <span>${calculateTotal().toFixed(2)}</span>
              </div>
            </div>
          </div>
          <div className="mt-4 flex justify-end">
            <button
              onClick={sendMail}
              className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-300"
            >
              Email Bill as PDF
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
