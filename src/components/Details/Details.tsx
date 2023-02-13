import { Borders } from '../Borders/Borders';
import { DetailsProps } from './Details.types';

export const Details: React.FC<DetailsProps> = ({ data, error, isLoading }) => {
  if (isLoading) {
    return (
      <div className='min-h-[60vh] flex items-center justify-center'>
        <p>Loading</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className='min-h-[60vh] flex items-center justify-center'>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <section className='Detail'>
      {data ? (
        <>
          <div className='w-full flex items-center justify-center'>
            <img
              className='w-full h-[300px] p-0 rounded-lg object-cover'
              src={data[0]?.flags?.png}
              alt={data[0]?.name}
            />
          </div>

          <section className='w-full mt-4'>
            <h2 className='text-2xl font-extrabold'>{data[0]?.name}</h2>

            <section className='flex py-8 font-normal gap-4 sm:justify-between md:gap-10 md:justify-start xl:gap-14 w-full flex-wrap xl:flex-nowrap'>
              <section className='space-y-2'>
                <p className='info'>
                  <strong>Native Name:</strong>
                  {'  ' + data[0]?.nativeName ?? 'Not found'}
                </p>
                <p className='info'>
                  <strong>Population:</strong>
                  {'  ' + data[0]?.population.toLocaleString('en-UK') ??
                    'Not found'}
                </p>
                <p className='info'>
                  <strong>Region:</strong>
                  {'  ' + data[0]?.region ?? 'Not found'}
                </p>
                <p className='info'>
                  <strong>Sub Region:</strong>
                  {'  ' + data[0]?.subregion ?? 'Not found'}
                </p>
                <p className='info'>
                  <strong>Capital:</strong>
                  {'  ' + data[0]?.capital ?? 'Not found'}
                </p>
              </section>
              <section>
                <p>
                  <strong>Top Level Domain:</strong>
                  {'  ' + data[0]?.topLevelDomain ?? 'Not found'}
                </p>
                <p>
                  <strong>Currencies:</strong>
                  {'  ' + data[0]?.currencies?.map((curr) => curr.name) ??
                    'Not found'}
                </p>
                <p>
                  <strong>languages:</strong>
                  {'  ' + data[0]?.languages?.map((lang) => ' ' + lang.name) ??
                    'Not found'}
                </p>
              </section>
            </section>
            {data[0].borders ? <Borders borders={data[0]?.borders} /> : null}
          </section>
        </>
      ) : null}
    </section>
  );
};
