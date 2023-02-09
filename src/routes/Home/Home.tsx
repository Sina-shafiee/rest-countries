import { useEffect, useState } from 'react';

import { useFetch } from '../../hooks/useFetch';

import { CardList, DropDown, SearchForm } from '../../components';
import { Data } from './Home.types';
import { CountryData } from '../../types';

export const Home: React.FC = () => {
  const {
    data: countriesData,
    loading,
    error
  } = useFetch('https://restcountries.com/v3.1/all');

  // countries data copy state
  const [countriesDataCopy, setCountriesDataCopy] = useState<Data[]>([]);
  // search input state
  const [searchTerm, setSearchTerm] = useState('');
  // select value
  const [selectValue, setSelectValue] = useState('');

  // copying countries data
  useEffect(() => {
    if (countriesData) {
      const temp = countriesData.map(
        ({ name, capital, population, region, flags }: CountryData): Data => ({
          name,
          flags,
          capital,
          population,
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
          ?.filter((country: Data): Data | boolean => {
            if (selectValue === '') {
              return country;
            } else {
              return country.region.includes(selectValue);
            }
          })
          .filter(({ name }: CountryData): boolean => {
            return name.official.toLowerCase().includes(searchTerm);
          })
          .map(
            ({
              name,
              flags,
              capital,
              population,
              region
            }: CountryData): Data => ({
              name,
              flags,
              capital,
              population,
              region
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
    <>
      <section className='container pt-8 gap-4 flex items-center justify-between flex-wrap'>
        <SearchForm
          searchTerm={searchTerm}
          handleSearchTerm={handleSearchTerm}
        />
        <DropDown value={selectValue} handleSelectChange={handleSelectChange} />
      </section>

      <CardList data={countriesDataCopy} isLoading={loading} error={error} />
    </>
  );
};
