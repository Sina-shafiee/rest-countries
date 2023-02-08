import { Data } from '../../types';
import { CardListProps } from './Card.types';
import { CardItem } from './CardItem';

export const CardList: React.FC<CardListProps> = ({ data }) => {
  return (
    <section className='cardList'>
      {data?.map(
        ({
          name,
          capital,
          population,
          region,
          flags
        }: Data): React.ReactNode => (
          <CardItem
            key={name.common}
            name={name}
            capital={capital}
            population={population}
            region={region}
            flags={flags}
          />
        )
      )}
    </section>
  );
};
