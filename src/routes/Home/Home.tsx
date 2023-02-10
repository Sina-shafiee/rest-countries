import { useState, useMemo } from 'react';

import { useFetch } from '../../hooks/useFetch';
import { CardList, DropDown, SearchForm } from '../../components';

export const Home: React.FC = () => {
  const {
    data: countriesData,
    loading,
    error
  } = useFetch('https://restcountries.com/v2/all');

  const [searchTerm, setSearchTerm] = useState('');
  const [selectValue, setSelectValue] = useState('');

  const handleSearchTerm = (term: string): void => {
    setSearchTerm(term);
  };

  const handleSelectChange = (value: string): void => {
    setSelectValue(value);
  };

  const filteredCountries = useMemo(() => {
    if (!countriesData || !countriesData.length) return [];

    const searchTermLower = searchTerm.toLowerCase();

    return countriesData.filter((country) => {
      if (selectValue !== '' && !country.region.includes(selectValue)) {
        return false;
      }

      return country.name.toLowerCase().includes(searchTermLower);
    });
  }, [countriesData, searchTerm, selectValue]);

  return (
    <main>
      <section className='container pt-8 gap-4 flex items-center justify-between flex-wrap'>
        <SearchForm
          searchTerm={searchTerm}
          handleSearchTerm={handleSearchTerm}
        />
        <DropDown value={selectValue} handleSelectChange={handleSelectChange} />
      </section>

      <CardList data={filteredCountries} isLoading={loading} error={error} />
    </main>
  );
};
