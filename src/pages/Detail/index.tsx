import { CardItemListWrapper } from '@/components/CarItemList/styles';
import ListHeader from '@/components/ListHeader';
import ListItem from '@/components/ListItem';
import OpenGraph from '@/components/OpenGraph';
import useCar from '@/hooks/useCar';
import { FUEL_TYPE_ENUM, SEGMENT_TYPE_ENUM } from '@/typings/db';
import { commaNumber, dateToString } from '@/util';
import { useParams } from 'react-router-dom';
import { ImageWrapper, TitleWrapper } from './styles';

const Detail = () => {
  const { id } = useParams();
  const { car, isLoading } = useCar(parseInt(id!, 10));

  if (isLoading)
    return (
      <CardItemListWrapper>
        <p className="message">불러오는중</p>
      </CardItemListWrapper>
    );

  if (!car)
    return (
      <CardItemListWrapper>
        <p className="message">데이터가 없습니다</p>
      </CardItemListWrapper>
    );

  return (
    <>
      <OpenGraph
        title={`${car.attribute.brand} ${car.attribute.name}`}
        description={`월 ${commaNumber(car.amount)} 원`}
        imgSrc={car.attribute.imageUrl}
      />
      <ImageWrapper>
        <img
          src={car.attribute.imageUrl || ''}
          alt={car.attribute.name || '차'}
        />
      </ImageWrapper>
      <TitleWrapper>
        <h1 className="brand">{car.attribute.brand}</h1>
        <h2 className="name">{car.attribute.name}</h2>
      </TitleWrapper>
      <ListItem value={`월 ${commaNumber(car.amount)} 원`} />
      <ListHeader>차량 정보</ListHeader>
      <ListItem
        name="차종"
        value={car ? SEGMENT_TYPE_ENUM[car.attribute.segment] : ''}
      />
      <ListItem
        name="연료"
        value={car ? FUEL_TYPE_ENUM[car.attribute.fuelType] : ''}
      />
      <ListItem
        name="이용 가능일"
        value={`${dateToString(car.startDate)} 부터`}
      />
      {car.insurance && (
        <>
          <ListHeader>보험</ListHeader>
          {car.insurance.map(({ name, description }, index) => (
            <ListItem key={index} name={name} value={description} />
          ))}
        </>
      )}
      {car.additionalProducts && car.additionalProducts.length > 0 && (
        <>
          <ListHeader>추가상품</ListHeader>
          {car.additionalProducts.map(({ name, amount }, index) => (
            <ListItem
              key={index}
              name={name}
              value={`${commaNumber(amount)}원`}
            />
          ))}
        </>
      )}
    </>
  );
};

export default Detail;
