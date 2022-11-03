import { ICar } from '@/typings/db';
import styled from 'styled-components';
import CarItem from '../CarItem';

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

const CardItemListWrapper = styled.div`
  position: relative;
  min-height: calc(100vh - 101px);

  .message {
    position: absolute;
    left: 0;
    right: 0;
    text-align: center;
    vertical-align: middle;
    font-weight: 700;
    font-size: 17px;
    line-height: 21px;
    top: 50%;
    transform: translate(0, -50%);
  }
`;
export default CardItemList;
