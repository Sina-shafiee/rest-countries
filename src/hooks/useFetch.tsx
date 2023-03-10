import { useState, useEffect, useCallback } from 'react';
import { CountryData, FetchResponse } from '../types';

// import { pause } from '../utils/pause';

export const useFetch = (url: string): FetchResponse => {
  const [data, setData] = useState<CountryData[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(async () => {
    setLoading(true);

    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const result = await response.json();
      // await pause(2000);

      setData(result);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error };
};
