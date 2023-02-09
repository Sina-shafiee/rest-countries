import { Link, useParams } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';

import { Details } from '../../components';
import { ArrowLeft } from './icons';

export const CountryDetails = () => {
  const { name } = useParams();
  const { data, loading, error } = useFetch(
    `https://restcountries.com/v3.1/name/${name
      ?.split('-')
      .join(' ')}?fullText=true`
  );

  console.log(data);

  return (
    <main>
      <section className='container py-8'>
        <Link
          to='/'
          className='btn btn-primary flex items-center justify-center max-w-max gap-2 text-lg '
        >
          <ArrowLeft classNames='w-5 h-5' /> Back
        </Link>
      </section>

      <Details isLoading={loading} error={error} data={data} />
    </main>
  );
};
