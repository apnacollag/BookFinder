import React, { useState } from 'react';
import axios from 'axios';
import { FaSearch } from 'react-icons/fa';
import BookList from './components/BookList';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    if (searchTerm.trim() === '') {
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`https://openlibrary.org/search.json?title=${searchTerm}`);
      setBooks(response.data.docs);
    } catch (err) {
      setError('Error fetching books');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-5">
      <h1 className="text-3xl font-bold mb-4">Book Finder</h1>
      <div className="flex w-full max-w-md items-center bg-white shadow-md rounded-md p-2">
        <input
          type="text"
          placeholder="Search by book title"
          className="flex-grow p-2 border-none outline-none"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch} className="p-2 text-blue-500">
          <FaSearch size={20} />
        </button>
      </div>
      {loading && <p className="mt-4">Loading...</p>}
      {error && <p className="text-red-500 mt-4">{error}</p>}
      {!loading && <BookList books={books} />}
    </div>
  );
};

export default App;
