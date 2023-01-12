import { createContext, useContext, useState } from 'react';

const SampleData = {
  books: [{ id: 1, title: 'MY First Book', marks: [] }],
};
const DataContext = createContext();
export const DataProvider = ({ children }) => {
  const [data, setData] = useState(SampleData);
  const addBook = () => {
    setData({
      ...data,
      books: [...data.books, { id: 0, title: '제목', marks: [] }],
    });
  };

  const saveBook = (selectBook) => {
    // console.log(selectBook.id);
    const newBook = data.books.filter((_book) => _book.id !== selectBook.id);
    // !selectBook.id = false 라는 것은 !selectBook.id=0 이라는 의미
    if (!selectBook.id) {
      selectBook.id =
        Math.max(...data.books.map((_defaultBook) => _defaultBook.id)) + 1;
    }
    // console.log(selectBook.id);
    setData({ ...data, books: [...newBook, selectBook] });
  };

  const removeBook = (rmBookId) => {
    setData({
      ...data,
      books: [...data.books.filter((_book) => _book.id !== rmBookId)],
    });
  };

  return (
    <DataContext.Provider value={{ data, addBook, removeBook, saveBook }}>
      {children}
    </DataContext.Provider>
  );
};
export const useData = () => useContext(DataContext);
