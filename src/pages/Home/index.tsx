import CardItemList from '@/components/CarItemList';
import Category from '@/components/Category';
import OpenGraph from '@/components/OpenGraph';
import useCarList from '@/hooks/useCarList';
import { SegmentType } from '@/typings/db';
import { getCategoryIdx, setCategoryIdx } from '@/util';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';

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
      <OpenGraph
        title="Altimobility"
        description="Altimobility Carsharing Service"
        imgSrc="https://grepp-programmers.s3.amazonaws.com/production/company/logo/7347/%EC%95%8C%ED%8B%B0%EB%AA%A8%EB%B9%8C%EB%A6%AC%ED%8B%B0-%EB%A1%9C%EA%B3%A0-%ED%9D%91%EB%B0%B1.jpg"
      />
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
