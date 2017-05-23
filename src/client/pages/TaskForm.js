import React from 'react';
import Category from './Category';

const styles = {
  categories: {
    textAlign: 'center',
  },
};

class CategoryList extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedCategory: 0,
      date: '2020-12-12',
      time: '10:10',
    };
  }

  getCategory(clickedCategory) {
    if (clickedCategory.id === this.state.selectedCategory) {
      this.setState({ selectedCategory: 0});
    }
    else {
      this.setState({ selectedCategory: clickedCategory.id });
    }
  }

  render() {
    return (
        <div id="form">
        <ul id="category-choice" style={ styles.categories }>
            {this.props.categories.map((category) => {
              const boundItemClick = this.getCategory.bind(this, category);

              return (<div onClick={ boundItemClick }>
                  <Category category={ category } selectedCategory={ this.state.selectedCategory } />
              </div>);
            })}
    </ul>
    <form id="category-time" >
        Datum
        <input type="date" name="date"
          value={ this.state.date }
          onChange={ this.updateDate.bind(this) }
        /> <br />
        Tid
        <input type="time" name="time"
          value={ this.state.time }
          onChange={ this.updateTime.bind(this) }
        />
    </form>
  </div>);
  }

  updateDate(event) {
    this.setState({date: event.target.value});
  }

  updateTime(event) {
    this.setState({time: event.target.value});
  }


}
export default CategoryList;
