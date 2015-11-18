import React from 'react';
import StyleSheet from 'react-style';
const Title = require('./Title.js');
const CategoriesList = require('./categoriesList.js');
require('json-loader');
const categories = require('json!../../data/Category.json');
const texts = require('json!../../data/i18n/categories-se.json');

const styles = StyleSheet.create({
  wrapper: {
    padding: '30px',
  },
});






class NewTask extends React.Component {

  render() {

    return (
      <div style={ styles.wrapper }>
      <Title textToDisplay={texts.titles.chooseCategory} style={ styles.wrapper }/>
      <CategoriesList categories={categories} style={ styles.wrapper }/>
      </div>
    );
  }
}

export default NewTask;
