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






class NewTask extends React.Component {
  constructor(props) {
      super(props);
      this.state = {selectedCategoryId: 1};
   }
   selectCategory(categoryId){
     this.setState({selectedCategoryId: categoryId});
     window.alert('Category selected : (just to show you it works ;)) ' + this.state.selectedCategoryId);
   }
  render() {

    return (
      <div style={ styles.wrapper }>
        <Title/>
        <CategoriesList categories={categories} onClick={this.selectCategory.bind(this)} />
      </div>
    );
  }
}

export default NewTask;
