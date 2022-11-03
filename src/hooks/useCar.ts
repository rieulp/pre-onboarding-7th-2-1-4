import { SegmentType, ICar } from '@/typings/db';
import { useQuery } from 'react-query';
import { getCars } from '@/api';

const useCar = (id?: number) => {
  const { isLoading, isError, data, error } = useQuery<
    ICar[],
    Error,
    ICar[],
    [string, SegmentType]
  >(['cars', 'ALL'], getCars);

  const car = data?.find((data) => data.id === id);

  return { isLoading, isError, car, error };
};

export default useCar;
