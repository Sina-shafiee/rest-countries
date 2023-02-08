import { useEffect, useState } from 'react';

import { useFetch } from '../hooks/useFetch';
import { Data } from '../types';

import { CardList, DropDown, SearchForm } from '../components';

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
      console.log(countriesData);

      const temp = countriesData.map(
        ({ name, capital, population, region, flags }: Data): Data => ({
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

  console.log(loading, error, countriesDataCopy);

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
          .filter((country: Data): boolean => {
            return country.name.official.toLowerCase().includes(searchTerm);
          })
          .map(({ name, flags, capital, population, region }) => ({
            name,
            flags,
            capital,
            population,
            region
          }));
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

      <CardList data={countriesDataCopy} />
    </>
  );
};
