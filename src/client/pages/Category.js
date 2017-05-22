import React from 'react';

class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isSelected: false };
  }


  render() {
    if (this.state.isSelected) {
      return (<li id={ 'category-' + this.props.category.name }>
              <h2>{this.props.category.name}</h2><br />
              <img src={ this.props.category.img } /></li>);
    } else {
      return (<li id={ 'category-' + this.props.category.name }>
            <h2>{this.props.category.name}</h2><br />
            <img src={ this.props.category.img } /></li>);
    }
  }

}

export default Category;
