import { SegmentType, SEGMENT_TYPE_ENUM } from '@/typings/db';
import styled from 'styled-components';
import Tag from '@/components/Tag';
import React from 'react';

interface Props {
  curIdx: number;
  categoryData: SegmentType[];
  onChange: (index: number) => void;
}

const Category = ({ curIdx, categoryData, onChange }: Props) => {
  const onClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target) {
      const target = e.target as HTMLDivElement;
      const index =
        target.dataset.index !== undefined
          ? parseInt(target.dataset.index, 10)
          : null;
      if (index !== null) onChange(index);
    }
  };

  return (
    <CategoryWrapper onClick={onClick}>
      {categoryData.map((segment, index) => (
        <Tag
          index={index}
          key={`tag${index}`}
          selected={index === curIdx}
          segment={SEGMENT_TYPE_ENUM[segment]}
        />
      ))}
    </CategoryWrapper>
  );
};

const CategoryWrapper = styled.nav`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 6px 12px;
  border-bottom: 1px solid var(--color-black);
  overflow-x: auto;
  overflow-y: hidden;
`;

export default Category;
