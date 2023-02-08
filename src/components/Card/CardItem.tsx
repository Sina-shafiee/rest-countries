import { CardItemProps } from './Card.types';

export const CardItem: React.FC<CardItemProps> = ({
  flags,
  name,
  population,
  capital,
  region
}) => {
  return (
    <article className='shadow-sm rounded-lg overflow-hidden hover:shadow-lg duration-300 transition-all bg-primary dark:bg-secondary'>
      <img
        className='aspect-video w-full object-fill'
        src={flags.png}
        alt={flags.alt}
      />

      <div className='p-7'>
        <h2 className='text-lg font-bold'>{name.official ?? 'Unavailable'}</h2>
        <p className='mt-4'>
          population: {population.toLocaleString('en-UK') ?? 0}
        </p>
        <p>Region: {region ?? 'Unavailable'}</p>
        <p>capital: {capital ?? 'Unavailable'}</p>
      </div>
    </article>
  );
};
