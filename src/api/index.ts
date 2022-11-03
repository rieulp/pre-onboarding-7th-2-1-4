import { ICar, IResponseBody, SegmentType } from '@/typings/db';
import axios from 'axios';
import { QueryFunction } from 'react-query';

const api = axios.create({
  baseURL: 'https://preonboarding.platdev.net/api/cars',
});

export const getCars: QueryFunction<ICar[], [string, SegmentType]> = async ({
  queryKey,
}) => {
  if (queryKey[1] === 'ALL') {
    return (await api.get<IResponseBody>('')).data.payload;
  }
  return (
    await api.get<IResponseBody>('', {
      params: {
        segment: queryKey[1],
      },
    })
  ).data.payload;
};
