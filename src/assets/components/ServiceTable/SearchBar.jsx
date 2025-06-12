// src/components/ServiceTable/SearchBar.jsx
import React from "react";
import "./ServiceTable.css";

export default function SearchBar({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="Search services..."
      value={value}
      onChange={onChange}
      className="search-input"
    />
  );
}
