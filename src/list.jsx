import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {data} from './utils/listdata';

function ListProject() {
  const navigate = useNavigate();
  const dropdownRef = useRef(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filterVisible, setFilterVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = (category) => {
    setSelectedCategory(category);
    setFilterVisible(false);
  };

  const toggleFilter = () => {
    setFilterVisible(!filterVisible);
  };

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

  const filteredData = data.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => setIsLoading(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  useEffect(() => {
    setIsLoading(true);
  }, [searchTerm, selectedCategory]);

  return (
    <div className="bg-white dark:bg-[#1e1e1e] text-black dark:text-white">
    <div className="pt-20 pb-10 px-4 font-sans mx-auto relative z-10 w-full h-full max-w-3xl"> 
      <div className="flex mt-10 max-w-4xl justify-between items-center mb-5 border-b border-gray-700 pb-2"> 
        <button className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded" onClick={() => navigate('/')}>Back</button>
        
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
          className="px-2 py-1 w-full mx-2 bg-gray-100 dark:bg-gray-900 border border-gray-700 rounded text-white"
        />
        <button className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded" onClick={toggleFilter}>Filter</button>
      </div>

      {filterVisible && (
        <div className="flex flex-col absolute top-25 right-4 bg-gray-100 dark:bg-gray-800 p-2 rounded shadow-md z-20" ref={dropdownRef}>
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
      <div className="fixed inset-0 bg-gray-200 dark:bg-black bg-opacity-70 flex justify-center items-center z-30">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900 dark:border-white"></div>
      </div>
    ) : (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 mt-8"> {/* Grid untuk mengatur tata letak */}
        {filteredData.map((item, index) => (
          <a
            key={index}
            href={item.link}
            className="block bg-gray-100 dark:bg-gray-900 rounded-lg overflow-hidden shadow-md border border-gray-700 relative z-10" // Hapus flex-col dan atur padding di dalam
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative">
              <img src={item.img} alt={item.title} className="w-full h-auto object-cover border-b border-gray-700" /> {/* Atur tinggi gambar */}
              <div className="absolute top-2 left-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs">{item.category}</div>
            </div>
            <div className="p-4 border-t border-gray-700"> {/* Pindahkan padding ke sini */}
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="text-gray-500">{item.description}</p>
            </div>
          </a>
        ))}
      </div>
    )}
    </div>
  </div>
  );
};

export default ListProject;