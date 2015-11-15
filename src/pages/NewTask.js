import React from 'react';
import StyleSheet from 'react-style';
const Title = require('./Title.js');
const CategoriesList = require('./categoriesList.js');
require('json-loader');
const categories = require('json!../../data/Category.json');

const styles = StyleSheet.create({
  wrapper: {
    padding: '30px',
  },
});



let selectedCategoryId = 0;
let setCategoriesBackgroundColors = function(){
  let tableOfColors = [];
  for(let categoryId = 1; categoryId <= 6; categoryId++){
    tableOfColors[categoryId] = 'white';
  }
  return(tableOfColors);
};
let categoriesBackgroundColors = setCategoriesBackgroundColors();
const selectCategory = function(backgroundColors,categoryId){
  let before = backgroundColors[1];
  backgroundColors[selectedCategoryId]='white';

  selectedCategoryId = categoryId;
  // window.alert('Category selected : (just to show you it works ;)) ' + selectedCategoryId);
  backgroundColors[1]='orange';
  let after = backgroundColors[1];
  window.alert(before+after);
};

class NewTask extends React.Component {
  // getInitialState() {
  //      return { showResults: false };
  // },
  // onClick() {
  //   this.setState({ showResults: true });
  // },
  render() {
    return (
      <div style={ styles.wrapper }>
        <Title/>
        <CategoriesList categories={categories} onClick={selectCategory} backgroundColors={categoriesBackgroundColors}/>
      </div>
    );
  }
}

export default NewTask;
