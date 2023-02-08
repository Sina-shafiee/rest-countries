import { useState } from 'react';

import { SearchFormProps } from './SearchForm.types';
import { SearchIcon } from './icons';

export const SearchForm: React.FC<SearchFormProps> = ({
  handleSearchTerm,
  searchTerm
}) => {
  const [placeholder, setPlaceholder] = useState('Search for a country...');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleSearchTerm(event.target.value);
  };

  return (
    <form className='min-w-[100%] sm:min-w-[350px]'>
      <div className='search-bar'>
        <SearchIcon classNames='w-7 h-7' />
        <input
          type='text'
          value={searchTerm}
          onChange={handleChange}
          onFocus={() => setPlaceholder('')}
          onBlur={() => setPlaceholder('Search for a country...')}
          placeholder={placeholder}
          className='bg-inherit flex-1 p-2 outline-none border-none'
        />
      </div>
    </form>
  );
};
