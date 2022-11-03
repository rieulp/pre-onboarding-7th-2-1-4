import { SegmentType, SEGMENT_TYPE_ENUM } from '@/typings/db';
import { useState } from 'react';
import styled from 'styled-components';
import Tag from '@/components/Tag';
import React from 'react';

interface Props {
  defaultIndex?: number;
  categoryData: SegmentType[];
  onChange: (index: number) => void;
}

const Category = ({ defaultIndex, categoryData, onChange }: Props) => {
  const [selectedIndex, setSelectedIndex] = useState(defaultIndex || 0);
  const onClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target) {
      const target = e.target as HTMLDivElement;
      const index =
        target.dataset.index !== undefined
          ? parseInt(target.dataset.index, 10)
          : null;
      if (index !== null) {
        setSelectedIndex(index);
        selectedIndex !== index && onChange(index);
      }
    }
  };

  return (
    <CategoryWrapper onClick={onClick}>
      {categoryData.map((segment, index) => (
        <Tag
          index={index}
          key={`tag${index}`}
          selected={index === selectedIndex}
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
