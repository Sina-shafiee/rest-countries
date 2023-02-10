import { useEffect, useState } from 'react';

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

  // copying countries data
  useEffect(() => {
    if (countriesData) {
      const temp = countriesData.map(
        ({
          name,
          capital,
          population,
          region,
          flags,
          cioc
        }: CountryData): CardsData => ({
          name,
          flags,
          capital,
          population,
          cioc,
          region
        })
      );

      setCountriesDataCopy(temp);
    }
  }, [countriesData]);

  // handling search input change
  const handleSearchTerm = (term: string): void => {
    setSearchTerm(term);
  };

  const handleSelectChange = (value: string): void => {
    setSelectValue(value);
  };

  useEffect(() => {
    let timeOut: NodeJS.Timeout;
    if (countriesData) {
      timeOut = setTimeout(() => {
        const temp = countriesData
          ?.filter((country: CountryData): CardsData | boolean => {
            if (selectValue === '') {
              return country;
            } else {
              return country.region.includes(selectValue);
            }
          })
          .filter(({ name }: CountryData): boolean => {
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
        setCountriesDataCopy(temp);
      }, 300);
    }

    return () => {
      clearTimeout(timeOut);
    };
  }, [selectValue, searchTerm]); // eslint-disable-line react-hooks/exhaustive-deps

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
