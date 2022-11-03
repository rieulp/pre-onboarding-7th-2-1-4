import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
}
const ListHeader = ({ children }: Props) => {
  return (
    <ListHeaderWrapper>
      <h3>{children}</h3>
    </ListHeaderWrapper>
  );
};

const ListHeaderWrapper = styled.div`
  background-color: var(--color-blue);
  height: 48px;
  padding-left: 20px;

  h3 {
    font-weight: 700;
    font-size: 17px;
    line-height: 21px;
    color: #ffffff;
    line-height: 48px;
  }
`;

export default ListHeader;
