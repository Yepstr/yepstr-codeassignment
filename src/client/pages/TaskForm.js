import React from 'react';
import Category from './Category';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import GridList from 'material-ui/GridList';
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar';

const styles = {
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
        <MuiThemeProvider>
          <div id="task-form">
            <Toolbar>
              <ToolbarGroup><ToolbarTitle text="Välj Kategori" /></ToolbarGroup>
            </Toolbar>
            <GridList style={ styles.gridList } cols={ 2.2 }>
                {this.props.categories.map((category) => {
                  const boundItemClick = this.getCategory.bind(this, category);

                  return (
                    <div key={ category.id } onClick={ boundItemClick }>
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
                cancelLabel="Avbryt"
                minDate={ this.state.minDate }
                defaultDate={ this.state.date }
                onChange={ this.updateDate.bind(this) }
              /><br />
              <TimePicker
                floatingLabelText="Tid"
                cancelLabel="Avbryt"
                defaultTime={ this.state.date }
                onChange={ this.updateTime.bind(this) }
              />
            </form>
          </div>
        </MuiThemeProvider>);
  }


}
export default CategoryList;
