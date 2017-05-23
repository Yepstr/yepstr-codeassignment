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
    width: 100,
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
  },

  selectedPaper: {
    height: 100,
    width: 100,
    margin: 25,
    textAlign: 'center',
    display: 'inline-block',
    backgroundColor: 'orange',
    color: 'white',
  },
};

class Category extends React.Component {

  render() {
    if (this.props.selectedCategory === this.props.category.id) {
      return (
      <Paper style={ styles.selectedPaper } zDepth={ 3 } >
        <div id={ 'category-' + this.props.category.name } style={ styles.category }>
          <div>{this.props.category.name}</div><br />
          <img src={ this.props.category.img } style={ styles.selectedImg } />
        </div>
      </Paper>);
    } else {
      return (
          <Paper style={ styles.paper } zDepth={ 0 } >
            <div id={ 'category-' + this.props.category.name } style={ styles.category }>
              <div><b>{this.props.category.name}</b></div><br />
              <img src={ this.props.category.img } style={ styles.img } />
            </div>
          </Paper>);
    }
  }

}

export default Category;
