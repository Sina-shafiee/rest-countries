import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import { BordersProps } from './Borders.types';

export const Borders: React.FC<BordersProps> = ({ borders }) => {
  const arrToString = useMemo(() => {
    return borders.join(',');
  }, [borders]);

  const { data, loading, error } = useFetch(
    `https://restcountries.com/v2/alpha?codes=${arrToString}`
  );

  console.log(data, loading, error);

  return (
    <section>
      <section className='flex gap-2 flex-wrap lg:flex-nowrap'>
        <strong className='whitespace-nowrap'>Borders Countries: </strong>{' '}
        <div className='flex gap-2 flex-wrap text-sm'>
          {data?.map((country) => (
            <Link to={`/country/${country.name.split(' ').join('-')}`}>
              <span className='btn btn-primary px-3 py-1' key={country.cioc}>
                {country.name + ' '}
              </span>
            </Link>
          ))}
        </div>
      </section>
    </section>
  );
};
