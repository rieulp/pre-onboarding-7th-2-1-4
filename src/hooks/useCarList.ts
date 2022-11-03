import { SegmentType, ICar } from '@/typings/db';
import { useQuery } from 'react-query';
import { getCars } from '@/api';

const useCarList = (category: SegmentType) => {
  const { isLoading, isError, data, error } = useQuery<
    ICar[],
    Error,
    ICar[],
    [string, SegmentType]
  >(['cars', category], getCars);

  return { isLoading, isError, cars: data, error };
};

export default useCarList;
