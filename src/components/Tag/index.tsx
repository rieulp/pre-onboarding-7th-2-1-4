import { SEGMENT_TYPE_ENUM } from '@/typings/db';
import styled, { css } from 'styled-components';

interface Props {
  segment: SEGMENT_TYPE_ENUM;
  index?: number;
  selected?: boolean;
  onClick?: () => void;
}

const Tag = ({ segment, selected = false, index, onClick }: Props) => {
  return (
    <TagWrapper selected={selected} onClick={onClick} data-index={index}>
      {segment}
    </TagWrapper>
  );
};

const TagWrapper = styled.button<{ selected: boolean }>`
  padding: 5px 17px;
  border-radius: 62px;
  border: none;
  font-family: 'Inter';
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  flex-shrink: 0;
  cursor: pointer;

  ${({ selected }) =>
    selected
      ? css`
          color: #ffffff;
          background-color: var(--color-black);
        `
      : css`
          background-color: var(--color-gray);
        `}
`;

export default Tag;
