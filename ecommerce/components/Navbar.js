import Link from 'next/link';
import React from 'react';

export default function Navbar() {
  return (
    <nav className="flex h-12 justify-between shadow-md items-center px-4">
      <Link href="#" className="text-lg font-bold">
        ECOMMERCE
      </Link>
      <div>
        <Link href="#" className="p-2">
          CART
        </Link>
        <Link href="#" className="p-2">
          LOGIN
        </Link>
      </div>
    </nav>
  );
}
