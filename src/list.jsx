import "./App.css"
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const ListProject = () => {
  const navigate = useNavigate();
  const dropdownRef = useRef(null); // Referensi untuk dropdown
  const data = [
    {
      title: "Advanced Container",
      description: "Quick loot Mode!!, Quick Move Item!!, Item Highlight!!",
      img: "https://img.youtube.com/vi/oP4TNL262xw/maxresdefault.jpg",
      link: "https://dimzproject.my.id/download/advanced-container",
      category: "Addon",
    },
    {
      title: "Another UI(discontinued)",
      description: "F3 Update, Stats?, Dark Mode",
      img: "https://img.youtube.com/vi/8KBUV4UfI1k/maxresdefault.jpg",
      link: "https://dimzproject.my.id/download/another-ui",
      category: "Addon",
    },
    {
      title: "Available Inventory Viewer",
      description: "0 inventory slots",
      img: "https://img.youtube.com/vi/umXtdcOn4Jk/maxresdefault.jpg",
      link: "https://dimzproject.my.id/download/available-inventory-viewer",
      category: "Resource Pack",
    },
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All'); // Radio button, satu kategori saja
  const [filterVisible, setFilterVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // State loading

  // Event handler untuk pencarian
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Event handler untuk filter kategori
  const handleFilterChange = (category) => {
    setSelectedCategory(category);
    setFilterVisible(false); // Tutup dropdown setelah memilih
  };

  // Toggle untuk menampilkan atau menyembunyikan dropdown
  const toggleFilter = () => {
    setFilterVisible(!filterVisible);
  };

  // Close dropdown ketika klik di luar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setFilterVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  // Filter data dan tampilkan loading
  const filteredData = data.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Simulasi loading
  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => setIsLoading(false), 1000); // Simulasi delay 1 detik
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  // Trigger loading ketika filter atau search berubah
  useEffect(() => {
    setIsLoading(true);
  }, [searchTerm, selectedCategory]);

  return (
    <div className="pt-20 px-4 bg-[#1e1e1e] text-white font-sans max-w-4xl mx-auto relative z-10"> 
      <div className="flex justify-between items-center mb-5 border-b border-gray-700 pb-2"> 
        <button className="px-4 py-2 bg-gray-800 rounded" onClick={() => navigate('/')}>Back</button>
        
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
          className="px-2 py-1 w-full mx-2 bg-gray-900 border border-gray-700 rounded text-white"
        />
        <button className="px-4 py-2 bg-gray-800 rounded" onClick={toggleFilter}>Filter</button>
      </div>

      {filterVisible && (
        <div className="flex flex-col absolute top-14 right-4 bg-gray-800 p-2 rounded shadow-md z-20" ref={dropdownRef}>
          <label>
            <input
              type="radio"
              name="category"
              checked={selectedCategory === 'All'}
              onChange={() => handleFilterChange('All')}
            />
            All
          </label>
          <label>
            <input
              type="radio"
              name="category"
              checked={selectedCategory === 'Resource Pack'}
              onChange={() => handleFilterChange('Resource Pack')}
            />
            Resource Pack
          </label>
          <label>
            <input
              type="radio"
              name="category"
              checked={selectedCategory === 'Addon'}
              onChange={() => handleFilterChange('Addon')}
            />
            Addon
          </label>
        </div>
      )}

      {/* Loading Spinner */}
      {isLoading ? (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-30">
          <div className="w-10 h-10 border-4 border-gray-200 border-t-gray-500 rounded-full animate-spin"></div>
        </div>
      ) : (
        filteredData.map((item, index) => (
          <a
            key={index}
            href={item.link}
            className="block bg-gray-900 mb-8 rounded-lg overflow-hidden shadow-md border border-gray-700 relative z-10 flex-col gap-3 p-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative">
              <img src={item.img} alt={item.title} className="w-full h-auto object-cover border-b border-gray-700" />
              <div className="absolute top-2 left-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs">{item.category}</div>
            </div>
            <div className="pt-2 border-t border-gray-700">
              <h3 className="my-2 text-xl font-bold">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
            </div>
          </a>
        ))
      )}
    </div>
  );
};

export default ListProject;