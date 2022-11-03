import { SegmentType, ICar } from '@/typings/db';
import { useQuery } from 'react-query';
import { getCars } from '@/api';

const useCar = (id: number) => {
  const { isLoading, isError, data, error } = useQuery<
    ICar[],
    Error,
    ICar | undefined,
    [string, SegmentType]
  >(['cars', 'ALL'], getCars, {
    select: (cars) => cars.find((car) => id === car.id),
  });

  return { isLoading, isError, car: data, error };
};

export default useCar;
