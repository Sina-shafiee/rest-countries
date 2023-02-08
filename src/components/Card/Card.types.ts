import { Data } from '../../types';

export type CardListProps = {
  data: Array<Data> | [];
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
