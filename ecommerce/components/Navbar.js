import Link from 'next/link';
import React, { useContext, useState, useEffect } from 'react';
import { Store } from '@/utils/Store';
import Head from 'next/head';

export default function Navbar() {
  const { state } = useContext(Store);
  const { cart } = state;
  const [cartItemsCount, setCartItemsCount] = useState(0);
  useEffect(() => {
    setCartItemsCount(cart.cartItems.reduce((a, c) => a + c.quantity, 0));
  }, [cart.cartItems]);
  return (
    <nav className="flex h-12 justify-between shadow-md items-center px-4">
      <Link href="/" className="text-lg font-bold">
        CHAMAE ECOMMERCE
      </Link>
      <div>
        <Link href="/Cart" className="p-2">
          CART
          {cartItemsCount > 0 && (
            <span className="ml-1 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white">
              {cartItemsCount}
            </span>
          )}
        </Link>
        <Link href="/login" className="p-2">
          LOGIN
        </Link>
      </div>
    </nav>
  );
}
