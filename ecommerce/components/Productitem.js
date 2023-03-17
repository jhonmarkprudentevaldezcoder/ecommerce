/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';

export default function Productitem({ product }) {
  return (
    <div className="card">
      <Link href={`/product/${product.slug}`}>
        <img
          src={product.image}
          alt={product.name}
          className="rounded shadow"
        />
      </Link>
      <div className="flex flex-col items-center justify-center">
        <Link href={`/product/${product.slug}`}>
          <h2 className="text-lg">{product.name}</h2>
        </Link>
        <p className="mb-2">{product.brand}</p>
        <p>₱{product.price}</p>
        <button type="button" className="primary-button">
          Add to cart
        </button>
      </div>
    </div>
  );
}
