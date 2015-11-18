import React from 'react';
import StyleSheet from 'react-style';
require('json-loader');
const texts = require('json!../../data/i18n/categories-se.json');
const Title = require('./Title.js');

const styles = StyleSheet.create({
  categoryTable: {
    borderCollapse: 'collapse',
    width: '100%',
  },
  categoryTd: {
    height: '33.3vw',
    width: '33.3vw',
    borderWidth: '0px 1.5px 1.5px 1.5px',
    borderStyle: 'solid',
    borderColor: 'rgb(222,222,222)',
    margin: 'auto',
    textAlign: 'center',
  },
  categoryTr: {
    fontSize: '3vw',
  },
  imageContainer: {
    marginBottom: '3vw',
  },
  image: {
    height: '8vw',
  },
  categoryName: {
    fontSize: '3vw',
    fontWeight: 'bold',
  },
  label: {
    marginTop: '3vw',
    marginBottom: '1vw',
  },
  form: {
    color: 'grey',
    marginLeft: '10vw',
    fontSize: '25',
  },
  input: {
    border: 'none',
    borderBottom: 'solid 3px black',
    width: '90%',
    fontSize: '27',
  }
});

const imagePath = '../../public/img/';

class CategoriesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {selectedCategoryId: -1};
    this.numberOfCellsInARow = 3;
    this.categories = this.props.categories.results;
  }

  selectCategory(categoryId) {
    this.setState({selectedCategoryId: categoryId});
  }

  displayAllCategoryRowsByOrders() {
    const numberOfCategoryCells = this.categories.length;
    const numberOfRows = numberOfCategoryCells / this.numberOfCellsInARow;
    const displayedCategoryRows = [];

    for (let rowNumber = 1; rowNumber <= numberOfRows; rowNumber++) {
      displayedCategoryRows.push(this.displayCategoryRowByOrders(rowNumber));
    }
    return(displayedCategoryRows);
  }

  displayCategoryRowByOrders(rowNumber) {
    const firstCategoryOrder = 1;
    const firstRowNumber = 1;
    const firstCategoryOrderInRow = (rowNumber-firstRowNumber) * this.numberOfCellsInARow + firstCategoryOrder;
    const lastCategoryOrderInRow = (firstCategoryOrderInRow - firstCategoryOrder) + this.numberOfCellsInARow;
    const displayedCategoryRowByOrders = [];

    for (let categoryOrder = firstCategoryOrderInRow; categoryOrder <= lastCategoryOrderInRow; categoryOrder++) {
      displayedCategoryRowByOrders.push(this.displayCategoryCellFromOrder(categoryOrder));
    }
    return(
      <tr style={styles.categoryTr}>
        {displayedCategoryRowByOrders}
      </tr>
    );
  }

  displayCategoryCellFromOrder(categoryOrder) {
    const numberOfCategories = this.categories.length;

    for (let categoryId=0; categoryId < numberOfCategories; categoryId++) {
      if (this.categories[categoryId].order === categoryOrder) {
        return(this.displayCategoryCellFromId(categoryId));
      }
    }
  }

  displayCategoryCellFromId(categoryId) {
    const backColor = this.decideBackgroundColor(categoryId);

    return(
        <td onClick={this.selectCategory.bind(this, categoryId)} style={{ height: '33.3vw',
          width: '33.3vw',
          borderWidth: '0px 1.5px 1.5px 1.5px',
          borderStyle: 'solid',
          borderColor: 'rgb(222,222,222)',
          margin: 'auto',
          textAlign: 'center',
          backgroundColor: backColor
        }}>
        <div style={styles.imageContainer}>
          <img src={imagePath + this.categories[categoryId].image} style={styles.image}/>
        </div>
        <div style={styles.categoryName}>
          {texts.categoriesNames[this.categories[categoryId].nameKey]}
        </div>
      </td>
  );
}
decideBackgroundColor(categoryId) {
  const isCategorySelected = (this.state.selectedCategoryId === categoryId);
  if (isCategorySelected) {
    return 'orange';
  } else{
    return 'white';
  }
}
displayDateForm() {
  if(this.state.selectedCategoryId !== -1) {
    const texte = 'essai';
    return(
      <div style={styles.categoryTr}>
        <Title textToDisplay={texts.titles.fillInformations}/>
        <div style={styles.form}>
          <div style={styles.label}>
            {texts.date}
          </div>
          <input type='date' style={styles.input}/>
          <div style={styles.label}>
            {texts.time}
          </div>
          <input type='time' style={styles.input}/>
        </div>
      </div>
    );
  } else {
    return('');
  }
}
render() {
  const it = this;
  return (
    <div style={styles.categoryTr}>
      <table style={styles.categoryTable}>
        <tbody style={{fontWeight: 'bold'}}>
          {it.displayAllCategoryRowsByOrders()}
        </tbody>
      </table>
      <div style={styles.categoryTr}>
        {it.displayDateForm()}
      </div>
    </div>
  );
}
}


export default CategoriesList;
