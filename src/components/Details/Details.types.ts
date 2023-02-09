import { CountryData } from '../../types';
export type DetailsProps = {
  data: Array<CountryData> | null;
  isLoading: boolean;
  error: string | null;
};
