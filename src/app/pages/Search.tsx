"use client";

import { useState } from 'react';

export default function Search() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold my-4">Property Search</h1>
      <input
        type="text"
        placeholder="Search by address, neighborhood, zip code..."
        className="border-2 border-gray-300 p-2 w-full"
      />
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3">
        Search
      </button>
    </div>
  );
}