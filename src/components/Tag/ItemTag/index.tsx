import styled from 'styled-components';

interface Props {
  name: string;
  className?: string;
}
const ItemTag = ({ name, className = '' }: Props) => {
  return <ItemTagWrapper className={className}>{name}</ItemTagWrapper>;
};

const ItemTagWrapper = styled.span`
  background: var(--color-blue);
  padding: 3px 14px;
  border-radius: 42px;
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  color: #ffffff;
  user-select: none;
`;
export default ItemTag;
