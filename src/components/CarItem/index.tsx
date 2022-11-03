import { IAttribute } from '@/typings/db';
import styled from 'styled-components';
import ItemTag from '../Tag/ItemTag';
import { Link } from 'react-router-dom';
import { commaNumber, isWithinADay } from '@/util';

interface Props {
  id: number; // 아이디
  amount: number; // 가격
  createdAt: Date; // 생성 날짜
  attribute: IAttribute; // 차량 설명
}
const CardItem = ({ id, attribute, amount, createdAt }: Props) => {
  const now = new Date();
  const isNewItem = isWithinADay(createdAt, now);

  return (
    <CardItemWrapper>
      <Link to={`/detail/${id}`}>
        <div className="textWrapper">
          <p className="brand">{attribute.brand}</p>
          <p className="name">{attribute.name}</p>
          <p className="type">
            {attribute.segment} / {attribute.fuelType}
          </p>
          <p className="amount">월 {commaNumber(amount)} 원 부터</p>
        </div>
        <div>
          <img
            src={attribute.imageUrl}
            alt={attribute.name}
            width={152}
            height={80}
          />
        </div>

        {isNewItem && <ItemTag name="신규" className="newItemTag" />}
      </Link>
    </CardItemWrapper>
  );
};

const CardItemWrapper = styled.div`
  border-bottom: 1px solid var(--color-black);
  height: 120px;

  &:last-child {
    border-bottom: 0;
  }

  a {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
  }

  .textWrapper {
    p {
      color: var(--color-black);
    }
    .brand,
    .name {
      font-weight: 700;
      font-size: 14px;
      line-height: 17px;
    }
    .type {
      margin-top: 8px;
    }
    .type,
    .amount {
      font-weight: 500;
      font-size: 12px;
      line-height: 15px;
    }
  }

  .newItemTag {
    position: absolute;
    top: 8px;
    right: 8px;
  }
`;

export default CardItem;
