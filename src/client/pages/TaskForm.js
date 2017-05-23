import React from 'react';
import Category from './Category';

import GridList from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

const styles = {
  categories: {
    display: 'flex',
    flexWrap: 'wrap',
    textAlign: 'center',
  },

  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',
  },

};

class CategoryList extends React.Component {
  constructor() {
    super();

    const today = new Date();

    this.state = {
      selectedCategory: 0,
      minDate: today,
      date: today,
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

  updateDate(event, newDate) {
    this.setState({date: newDate});
  }

  updateTime(event, newDate) {
    this.setState({date: newDate});
  }

  render() {
    return (
        <div id="task-form">
          <Toolbar>
          <ToolbarGroup><ToolbarTitle text="Välj Kategori" /></ToolbarGroup>
          </Toolbar>
          <GridList style={ styles.gridList } cols={ 2.2 }>
              {this.props.categories.map((category) => {
                const boundItemClick = this.getCategory.bind(this, category);

                return (
                  <div onClick={ boundItemClick }>
                    <Category category={ category } selectedCategory={ this.state.selectedCategory } />
                  </div>);
              })}

          </GridList>
    <form id="category-time" >
      <Toolbar>
        <ToolbarGroup><ToolbarTitle text="Uppdragsinformation" /></ToolbarGroup>
      </Toolbar>
      <DatePicker
        floatingLabelText="Datum"
        minDate={ this.state.minDate }
        defaultDate={ this.state.date }
        onChange={ this.updateDate.bind(this) }
      /><br />
      <TimePicker
        floatingLabelText="Tid"
        defaultTime={ this.state.date }
        onChange={ this.updateTime.bind(this) }
      />
    </form>
  </div>);
  }


}
export default CategoryList;
