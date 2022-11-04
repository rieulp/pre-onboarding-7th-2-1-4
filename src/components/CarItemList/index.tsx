import { ICar } from '@/typings/db';
import styled from 'styled-components';
import CarItem from '../CarItem';
import { CardItemListWrapper } from './styles';

interface Props {
  isLoading: boolean;
  cardItemData?: ICar[];
}

const CardItemList = ({ cardItemData, isLoading }: Props) => {
  if (isLoading) {
    return (
      <CardItemListWrapper>
        <p className="message">불러오는 중</p>
      </CardItemListWrapper>
    );
  }
  if (!cardItemData || cardItemData.length === 0) {
    return (
      <CardItemListWrapper>
        <p className="message">차량이 없습니다.</p>
      </CardItemListWrapper>
    );
  }
  return (
    <CardItemListWrapper>
      {cardItemData.map(({ amount, attribute, createdAt, id }) => (
        <CarItem
          key={id}
          id={id}
          amount={amount}
          attribute={attribute}
          createdAt={createdAt}
        />
      ))}
    </CardItemListWrapper>
  );
};

export default CardItemList;
