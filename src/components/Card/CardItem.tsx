import { Link } from 'react-router-dom';
import { CardItemProps } from './Card.types';

export const CardItem: React.FC<CardItemProps> = ({
  flags,
  name,
  population,
  capital,
  region
}) => {
  return (
    <article className='card'>
      <Link to={`/country/${name.official.split(' ').join('-')}`}>
        <div className='w-[100%] sm:w-[310px] sm:h-[180px]'>
          <img
            className='aspect-video w-full object-fill'
            src={flags?.png}
            alt={flags?.alt}
          />
        </div>
        <div className='p-7'>
          <h2 className='text-lg font-bold'>
            {name?.official ?? 'Unavailable'}
          </h2>
          <p className='mt-4'>
            population: {population?.toLocaleString('en-UK') ?? 0}
          </p>
          <p>Region: {region ?? 'Unavailable'}</p>
          <p>capital: {capital ?? 'Unavailable'}</p>
        </div>
      </Link>
    </article>
  );
};
