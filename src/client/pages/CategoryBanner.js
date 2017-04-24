import React from 'react';

const headerStyle = {
  height: '80px',
  borderTop: '3px solid rgb(224,224,224)',
  borderBottom: '3px solid rgb(224,224,224)',
  backgroundColor: 'rgb(248,248,248)'
};
const textStyle = {
  lineHeight: '5'
};
const CategoryBanner = ({text}) => {
  return (
    <div style={headerStyle}>
      <span style={textStyle}>{text}</span>
    </div>
  );
};

export default CategoryBanner;
