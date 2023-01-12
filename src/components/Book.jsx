import { useState } from 'react';

export const Book = ({ book, get_removeBook, get_saveBook }) => {
  const [bookTitle, setBookTitle] = useState(book.title);
  const changeBookTitle = () => {
    get_saveBook(book);
    book.title = bookTitle;
  };
  return (
    <div className='w-80 rounded-tl-xl rounded-br-xl border border-lime-900 py-1.5 px-3 m-3 md:m-1.5 shadow'>
      <div className='flex justify-between my-1'>
        <h3>{book.title}</h3>
        <button
          // onClick={}
          className='px-2 text-white'
        >
          Edit
        </button>
      </div>
      <hr />
      <div id='mark'>
        <div className='w-auto relative'>
          <div className='flex'>
            <label htmlFor='bookTitle' className='mr-2'>
              Book Title :
            </label>
            <input
              id='bookTitle'
              type='text'
              value={bookTitle}
              onChange={(evt) => {
                setBookTitle(evt.target.value);
              }}
            />
          </div>
          <button
            onClick={changeBookTitle}
            className='px-2 text-white absolute right-0'
          >
            save
          </button>
        </div>
        <hr />
        <button
          onClick={() => get_removeBook(book.id)}
          className='px-2 text-white mt-6'
        >
          Remove
        </button>
      </div>
    </div>
  );
};
