import { BookmarkIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export const Nav = () => {
  return (
    <nav className='flex justify-around drop-shadow'>
      <div className='flex items-center text-4xl'>
        <BookmarkIcon className='h-12 mr-2 text-lime-500' />
        <h1 className='font-bold'>MY Index</h1>
      </div>
      <div className='flex items-center'>
        <label htmlFor='search'>
          <MagnifyingGlassIcon className='h-8 mx-2' />
        </label>
        <input
          id='search'
          type='text'
          placeholder='Search...'
          className='text-2xl px-2 py-1'
        />
      </div>
    </nav>
  );
};
