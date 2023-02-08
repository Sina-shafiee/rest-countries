// countries fetch data type
export type Data = {
  name: {
    common: string;
    official: string;
  };
  capital: string[];
  population: number;
  region: string;
};

// useFetch hook return data type
export type FetchResponse = {
  data: Array<Data> | null;
  loading: boolean;
  error: string | null;
};
