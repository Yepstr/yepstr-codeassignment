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

  render() {

    return (
      <div style={ styles.wrapper }>
        <Title/>
        <CategoriesList categories={categories}  />
      </div>
    );
  }
}

export default NewTask;
