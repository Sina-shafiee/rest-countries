import { DetailsProps } from './Details.types';

export const Details: React.FC<DetailsProps> = ({ data, error, isLoading }) => {
  return (
    <section>
      {data && <img src={data[0]?.flags?.png} alt={data[0]?.flags?.alt} />}
    </section>
  );
};
