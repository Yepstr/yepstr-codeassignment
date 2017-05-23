import React from 'react';

const styles = {
  category: {
    listStyleType: 'none',
    width: '50%',
    textAlign: 'center',
  },
  selectedCategory: {
    listStyleType: 'none',
    width: '50%',
    textAlign: 'center',
    fontWeight: '400',
    color: 'white',
    backgroundColor: 'orange',
  },

  img: {
    width: '78.5px',
    height: '78.5px',
    maxWidth: '100%',

  },
  selectedImg: {
    filter: 'invert(100%)',
    width: '78.5px',
    height: '78.5px',
    maxWidth: '100%',


  },
};

class Category extends React.Component {

  render() {
    if (this.props.selectedCategory === this.props.category.id) {
      return (<li id={ 'category-' + this.props.category.name } style={ styles.selectedCategory }
              >
              <div>{this.props.category.name}</div><br />
              <img src={ this.props.category.img } style={ styles.selectedImg } /></li>);
    } else {
      return (<li id={ 'category-' + this.props.category.name } style={ styles.category }
              >
            <div>{this.props.category.name}</div><br />
            <img src={ this.props.category.img } style={ styles.img } /></li>);
    }
  }

}

export default Category;
