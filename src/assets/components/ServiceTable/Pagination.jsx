// src/components/ServiceTable/Pagination.jsx
import React from "react";
import "./ServiceTable.css";

export default function Pagination({ onNext, onPrev, nextUrl, prevUrl }) {
  return (
    <div className="pagination">
      <button onClick={onPrev} disabled={!prevUrl}>
        Previous
      </button>
      <button onClick={onNext} disabled={!nextUrl}>
        Next
      </button>
    </div>
  );
}
