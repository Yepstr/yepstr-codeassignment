import React from 'react';
import Paper from 'material-ui/Paper';

const styles = {
  category: {
    width: '50%',
    textAlign: 'center',
  },

  img: {
    maxWidth: '100%',

  },
  selectedImg: {
    filter: 'invert(100%)',
    maxWidth: '100%',


  },
  paper: {
    height: 100,
    width: 115,
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
  },

  selectedPaper: {
    height: 115,
    width: 115,
    margin: 19,
    backgroundColor: 'orange',
    color: 'white',
  },
};

const Category = ({selectedCategory, category}) => {
  if (selectedCategory === category.id) {
    return (
      <Paper style={ styles.selectedPaper } zDepth={ 2 } >
        <div id={ 'category-' + category.name } style={ styles.category }>
          <div>{category.name}</div><br />
          <img src={ category.img } style={ styles.selectedImg } />
        </div>
      </Paper>);
  } else {
    return (
          <Paper style={ styles.paper } zDepth={ 0 } >
            <div id={ 'category-' + category.name } style={ styles.category }>
              <div><b>{category.name}</b></div><br />
              <img src={ category.img } style={ styles.img } />
            </div>
          </Paper>);
  }
};

export default Category;
