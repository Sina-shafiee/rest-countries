import { CountryData } from '../../types';

export type CardListProps = {
  data: Array<CountryData> | [];
  isLoading: boolean;
  error: string | null;
};

export type CardItemProps = {
  name: {
    common: string;
    official: string;
  };
  capital: string[];
  population: number;
  region: string;
  flags: {
    alt: string;
    svg: string;
    png: string;
  };
};
