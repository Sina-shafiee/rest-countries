import { useEffect, useState, useMemo } from 'react';

import { useFetch } from '../../hooks/useFetch';
import { CardList, DropDown, SearchForm } from '../../components';
import { CountryData, CardsData } from '../../types';

export const Home: React.FC = () => {
  const {
    data: countriesData,
    loading,
    error
  } = useFetch('https://restcountries.com/v2/all');

  // countries data copy state
  const [countriesDataCopy, setCountriesDataCopy] = useState<CardsData[]>([]);
  // search input state
  const [searchTerm, setSearchTerm] = useState('');
  // select value
  const [selectValue, setSelectValue] = useState('');

  // handling search input change
  const handleSearchTerm = (term: string): void => {
    setSearchTerm(term);
  };

  const handleSelectChange = (value: string): void => {
    setSelectValue(value);
  };

  const temp = useMemo(() => {
    if (!countriesData) return [];

    return countriesData
      .filter((country: CountryData) => {
        if (selectValue === '') {
          return country;
        } else {
          return country.region.includes(selectValue);
        }
      })
      .filter(({ name }: CountryData) => {
        return name.toLowerCase().includes(searchTerm);
      })
      .map(
        ({
          name,
          flags,
          capital,
          population,
          region,
          cioc
        }: CountryData): CardsData => ({
          name,
          flags,
          capital,
          population,
          region,
          cioc
        })
      );
  }, [countriesData, selectValue, searchTerm]);

  useEffect(() => {
    setCountriesDataCopy(temp);
  }, [temp]);

  return (
    <main>
      <section className='container pt-8 gap-4 flex items-center justify-between flex-wrap'>
        <SearchForm
          searchTerm={searchTerm}
          handleSearchTerm={handleSearchTerm}
        />
        <DropDown value={selectValue} handleSelectChange={handleSelectChange} />
      </section>

      <CardList data={countriesDataCopy} isLoading={loading} error={error} />
    </main>
  );
};
