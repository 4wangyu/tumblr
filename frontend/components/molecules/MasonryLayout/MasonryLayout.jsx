import React from 'react';
import { MasonryLayoutContainer } from './MasonryLayout.styled';

const MasonryLayout = ({ columns = 2, gap = 15, children }) => {
  const columnWrapper = {};
  const result = [];

  // create columns
  for (let i = 0; i < columns; i++) {
    columnWrapper[`column${i}`] = [];
  }

  // divide children into columns
  for (let i = 0; i < children.length; i++) {
    const columnIndex = i % columns;
    columnWrapper[`column${columnIndex}`].push(
      <div key={i} style={{ marginBottom: `${gap}px` }}>
        {children[i]}
      </div>
    );
  }

  // wrap children in each column with a div
  for (let i = 0; i < columns; i++) {
    result.push(
      <div
        key={i}
        style={{
          marginLeft: `${i > 0 ? gap : 0}px`,
          // flex: 1,
        }}>
        {columnWrapper[`column${i}`]}
      </div>
    );
  }

  return (
    <MasonryLayoutContainer>
      {result}
    </MasonryLayoutContainer>
  );
}

export default MasonryLayout;