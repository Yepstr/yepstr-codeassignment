import React from 'react';

const imageStyle = {
  'width': '70px',
  'height': '70px',
  'marginTop': '10%'
};

const Category = ({id, logo, description, selected, onClick}) => {
  let categoryStyle = {
    display: 'inline-block',
    border: '1px solid rgb(224,224,224)',
    width: '33%',
    margin:0,
    backgroundColor: selected === id ? 'rgb(228,143,0)' : ''
  };
  
  return (
    <div style={categoryStyle} onClick={onClick}>
      <img style ={imageStyle} src={logo}/>
      <h2>{description}</h2>
    </div>
  );
};

export default Category;
