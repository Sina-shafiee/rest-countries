// countries fetch data type
export type CountryData = {
  name: string;
  capital: string;
  population: number;
  region: string;
  subregion: string;
  cioc: string;
  flags: {
    png: string;
    svg: string;
  };
  currencies: {
    code: string;
    name: string;
    symbol: string;
  }[];
  languages: {
    name: string;
  }[];
  nativeName: string;
  topLevelDomain: string[];
  borders: string[];
};

// cards data
export type CardsData = {
  name: string;
  capital: string;
  population: number;
  region: string;
  flags: {
    svg: string;
    png: string;
  };
  cioc: string;
};

// useFetch hook return data type
export type FetchResponse = {
  data: Array<CountryData> | null;
  loading: boolean;
  error: string | null;
};
