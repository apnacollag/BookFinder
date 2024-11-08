import React from 'react';

const BookList = ({ books }) => {
  if (books.length === 0) {
    return <p className="mt-4">No books found</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5 w-full max-w-4xl">
      {books.map((book) => (
        <div key={book.key} className="bg-white p-4 rounded-md shadow-md">
          <h2 className="text-lg font-semibold">{book.title}</h2>
          <p className="text-sm text-gray-600">{book.author_name?.join(', ') || 'Unknown Author'}</p>
          {book.cover_i ? (
            <img
              src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
              alt={book.title}
              className="mt-2 w-full h-64 object-cover rounded-md"
            />
          ) : (
            <p className="mt-2">No cover image available</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default BookList;
