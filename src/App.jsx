import { Book } from './components/Book';
import { Nav } from './components/Nav';
import { useData } from './hooks/data-context';

function App() {
  const { data, addBook, removeBook, saveBook } = useData();
  return (
    <div id='wrap' className='m-auto w-screen'>
      <header className='shadow p-4 w-full'>
        <Nav />
      </header>
      <main className='p-4'>
        <button
          onClick={addBook}
          className=' px-4 rounded shadow text-white md:float-right'
        >
          + Add Book
        </button>
        <div className='md:flex'>
          {data.books.map((book_item) => (
            <Book
              key={book_item.id}
              book={book_item}
              get_removeBook={removeBook}
              get_saveBook={saveBook}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
