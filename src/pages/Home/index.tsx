import CardItemList from '@/components/CardItemList';
import Category from '@/components/Category';
import useCarList from '@/hooks/useCarList';
import { SegmentType } from '@/typings/db';
import { useState } from 'react';

const categoryData: SegmentType[] = ['ALL', 'E', 'D', 'C', 'SUV'];

const Home = () => {
  const [curCategory, setCurCategory] = useState<SegmentType>(categoryData[0]);
  const { isLoading, cars } = useCarList(curCategory);
  const onChangeCategory = (index: number) => {
    setCurCategory(categoryData[index]);
  };

  return (
    <>
      <Category categoryData={categoryData} onChange={onChangeCategory} />
      <CardItemList isLoading={isLoading} cardItemData={cars} />
    </>
  );
};

export default Home;
