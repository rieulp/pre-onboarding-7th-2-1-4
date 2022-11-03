import dayjs from 'dayjs';
import 'dayjs/locale/ko';

dayjs.locale('ko');
export const isWithinADay = (before: Date, after: Date) =>
  dayjs(after).diff(before, 'day') < 1;

export const dateToString = (date?: Date) =>
  date ? dayjs(date).format('MMM D일 (dd)') : '';

export const commaNumber = (number?: number) =>
  number ? number.toLocaleString('ko-KR') : '';
