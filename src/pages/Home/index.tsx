import CardItemList from '@/components/CarItemList';
import Category from '@/components/Category';
import useCarList from '@/hooks/useCarList';
import { SegmentType } from '@/typings/db';
import { getCategoryIdx, setCategoryIdx } from '@/util';
import { useState } from 'react';

const categoryData: SegmentType[] = ['ALL', 'E', 'D', 'C', 'SUV'];

const Home = () => {
  const [curIdx, setCurIdx] = useState(getCategoryIdx());
  const { isLoading, cars } = useCarList(categoryData[curIdx]);
  const onChangeCategory = (index: number) => {
    setCategoryIdx(index);
    setCurIdx(index);
  };

  return (
    <>
      <Category
        curIdx={curIdx}
        categoryData={categoryData}
        onChange={onChangeCategory}
      />
      <CardItemList isLoading={isLoading} cardItemData={cars} />
    </>
  );
};

export default Home;
