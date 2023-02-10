import { CardsData } from '../../types';

export type CardListProps = {
  data: Array<CardsData> | [];
  isLoading: boolean;
  error: string | null;
};
