import { Fragment } from 'react';
import { CardsData } from '../../types';
import { Skeleton } from '../Skeleton/Skeleton';
import { CardListProps } from './Card.types';
import { CardItem } from './CardItem';

export const CardList: React.FC<CardListProps> = ({
  data,
  isLoading,
  error
}) => {
  if (isLoading) {
    return (
      <section className='cardList'>
        {Array(8)
          .fill(0)
          .map((_, index: number): React.ReactNode => {
            return (
              <Skeleton classNames='w-full h-[360px] rounded-lg' key={index} />
            );
          })}
      </section>
    );
  }

  if (error) {
    return (
      <div className='flex min-h-[60vh] text-xl font-mono items-center justify-center'>
        <p>{error}</p>
      </div>
    );
  }

  if (!data.length) {
    return (
      <div className='flex items-center justify-center min-h-[60vh]'>
        <p> Sorry! No Countries Found..</p>
      </div>
    );
  }

  return (
    <Fragment>
      <section className='cardList'>
        {data?.map(
          ({
            name,
            capital,
            population,
            region,
            flags,
            cioc
          }: CardsData): React.ReactNode => (
            <CardItem
              key={`${cioc}${Math.random() * 1000}`}
              name={name}
              capital={capital}
              population={population}
              region={region}
              flags={flags}
              cioc={cioc}
            />
          )
        )}
      </section>
    </Fragment>
  );
};
