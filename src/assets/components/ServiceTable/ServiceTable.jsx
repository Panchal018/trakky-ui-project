// src/components/ServiceTable/ServiceTable.jsx
import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import SearchBar from "./SearchBar";
import Pagination from "./Pagination";
import "./ServiceTable.css";

const API_BASE = "http://20.193.149.47:2242/salons/service/";

export default function ServiceTable() {
  const [allData, setAllData] = useState([]);
  const [displayedData, setDisplayedData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const itemsPerPage = 100;

  const fetchAllPages = async () => {
    setLoading(true);
    let url = API_BASE;
    let collected = [];

    try {
      while (url) {
        const response = await fetch(url);
        const result = await response.json();

        if (Array.isArray(result.results)) {
          collected = [...collected, ...result.results];
          url = result.next;
        } else {
          console.warn("Invalid response:", result);
          break;
        }
      }

      setAllData(collected);
    } catch (err) {
      console.error("Error fetching all data:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllPages();
  }, []);

  useEffect(() => {
    const filtered = allData.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    setDisplayedData(filtered.slice(start, end));
  }, [allData, searchTerm, currentPage]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const totalFiltered = allData.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const totalPages = Math.ceil(totalFiltered.length / itemsPerPage);

  return (
    <div className="table-container">
      <h2>Service List</h2>
      <SearchBar value={searchTerm} onChange={handleSearch} />

      <table className="service-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Service Name</th>
            <th>Price</th>
            <th>Time</th>
          </tr>
        </thead>

        {loading ? (
          <tbody>
            <tr>
              <td colSpan="4"><Loader /></td>
            </tr>
          </tbody>
        ) : displayedData.length > 0 ? (
          <tbody>
            {displayedData.map((item, index) => (
              <tr key={item.id}>
                <td>{(currentPage - 1) * itemsPerPage + index + 1}</td>
                <td>{item.name}</td>
                <td>₹{item.price}</td>
                <td>{item.time}</td>
              </tr>
            ))}
          </tbody>
        ) : (
          <tbody>
            <tr>
              <td colSpan="4">No Data Available</td>
            </tr>
          </tbody>
        )}
      </table>

      {!loading && totalPages > 1 && (
        <Pagination
          onNext={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          onPrev={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          nextUrl={currentPage < totalPages}
          prevUrl={currentPage > 1}
        />
      )}
    </div>
  );
}
