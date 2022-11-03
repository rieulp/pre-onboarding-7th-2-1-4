import styled from 'styled-components';

interface Props {
  name?: string;
  value?: string;
}

const ListItem = ({ name = '', value = '' }: Props) => {
  return (
    <ListItemWrapper>
      <span className="name">{name}</span>
      <span className="value">{value}</span>
    </ListItemWrapper>
  );
};

const ListItemWrapper = styled.div`
  height: 48px;
  padding: 13px 21px 14px 19px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    color: var(--color-black);
  }
  .name {
    font-weight: 700;
    font-size: 17px;
    line-height: 21px;
  }

  .value {
    font-weight: 400;
    font-size: 17px;
    line-height: 21px;

    text-align: right;
  }
`;

export default ListItem;
