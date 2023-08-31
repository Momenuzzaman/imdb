"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!search) return;

    router.push(`/search/${search}`);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-6xl mx-auto px-5 flex items-center content-center flex-1"
    >
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Search keywords...."
        className="w-full h-14 rounded-sm placeholder-gray-500 bg-transparent outline-none"
      />
      <button
        disabled={!search}
        type="submit"
        className="text-amber-600 disabled:text-gray-400"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
