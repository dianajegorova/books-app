import React, { useState, useEffect } from 'react';
import items from './data';
import BookList from './BookList';

function App() {

  const [books, setBooks] = useState(items);

  return (
    <>
    <main className="main">
      <BookList books={books}/>
    </main>
    </>
  )
}

export default App;
