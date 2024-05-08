"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function Index() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold text-center my-6">Welcome to Real Estate Insights</h1>
      <p className="text-lg text-center mb-4">Explore comprehensive real estate data and insights.</p>
      <div className="flex justify-center">
        <Link href="/search">
          <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Start Your Search
          </a>
        </Link>
      </div>
    </div>
  );
}