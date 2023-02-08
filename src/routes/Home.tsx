import { useEffect, useState } from 'react';

import { useFetch } from '../hooks/useFetch';
import { Data } from '../types';

import { DropDown, SearchForm } from '../components';

export const Home: React.FC = () => {
  const {
    data: countriesData,
    loading,
    error
  } = useFetch('https://restcountries.com/v3.1/all');

  const [countriesDataCopy, setCountriesDataCopy] = useState<Data[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  // copying countries data
  useEffect(() => {
    if (countriesData) {
      setCountriesDataCopy(countriesData);
    }
  }, [countriesData]);

  console.log(loading, error, countriesDataCopy);

  // handling search input change
  const handleSearchTerm = (term: string): void => {
    setSearchTerm(term);
  };

  return (
    <>
      <section className='container pt-6 gap-4 flex items-center justify-between flex-wrap'>
        <SearchForm
          searchTerm={searchTerm}
          handleSearchTerm={handleSearchTerm}
        />
        <DropDown />
      </section>
    </>
  );
};
