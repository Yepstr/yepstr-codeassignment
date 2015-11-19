import React from 'react';
import StyleSheet from 'react-style';
const texts = require('json!../../data/i18n/categories-se.json');
const categoriesJSON = require('json!../../data/Category.json');
const categories = categoriesJSON.results;
const Title = require('./Title.js');
const InputWithLabel = require('./InputWithLabel.js');

const styles = StyleSheet.create({
  wrapper: {
    padding: '30px',
  },
  categoryTr: {
    fontSize: '3vw',
  },
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
});

const imagePath = '../../public/img/';

class CategoriesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {selectedCategoryId: -1};
    this.numberOfCellsInARow = 3;
    this.categorySelectedBackgroundColor = 'orange';
    this.defaultCategoryBackgroundColor = 'white';
  }

  render() {
    const it = this;
    return (
      <div style={styles.wrapper}>

        <Title textToDisplay={texts.titles.chooseCategory} />

        <table style={styles.categoryTable}>
          <tbody>
            {it.displayAllCategoryRowsByOrders()}
          </tbody>
        </table>

        {it.displayDateForm()}

      </div>
    );
  }

  displayAllCategoryRowsByOrders() {
    const numberOfCategoryCells = categories.length;
    const numberOfRows = numberOfCategoryCells / this.numberOfCellsInARow;
    const displayedCategoryRows = [];

    for (let rowNumber = 1; rowNumber <= numberOfRows; rowNumber++) {
      displayedCategoryRows.push(this.displayCategoryRowByOrders(rowNumber));
    }
    return (displayedCategoryRows);
  }

  displayCategoryRowByOrders(rowNumber) {
    const firstCategoryOrder = 1;
    const firstRowNumber = 1;
    const firstCategoryOrderInRow = (rowNumber - firstRowNumber) * this.numberOfCellsInARow + firstCategoryOrder;
    const lastCategoryOrderInRow = (firstCategoryOrderInRow - firstCategoryOrder) + this.numberOfCellsInARow;
    const displayedCategoryRowByOrders = [];

    for (let categoryOrder = firstCategoryOrderInRow; categoryOrder <= lastCategoryOrderInRow; categoryOrder++) {
      displayedCategoryRowByOrders.push(this.displayCategoryCellFromOrder(categoryOrder));
    }
    return (
      <tr style={styles.categoryTr} key={rowNumber}>
        {displayedCategoryRowByOrders}
      </tr>
    );
  }

  displayCategoryCellFromOrder(categoryOrder) {
    const numberOfCategories = categories.length;

    for (let categoryId = 0; categoryId < numberOfCategories; categoryId++) {
      if (categories[categoryId].order === categoryOrder) {
        return (this.displayCategoryCellFromId(categoryId));
      }
    }
  }

  displayCategoryCellFromId(categoryId) {
    const backColor = this.decideBackgroundColor(categoryId);

    return (
      <td onClick={this.selectCategory.bind(this, categoryId)} key={categoryId} style={{ height: '33.3vw',
        width: '33.3vw',
        borderWidth: '0px 1.5px 1.5px 1.5px',
        borderStyle: 'solid',
        borderColor: 'rgb(222,222,222)',
        margin: 'auto',
        textAlign: 'center',
        backgroundColor: backColor,
      }}>

        <div style={styles.imageContainer}>
          <img src={imagePath + categories[categoryId].image} style={styles.image}/>
        </div>

        <div style={styles.categoryName}>
          {texts.categoriesNames[categories[categoryId].nameKey]}
        </div>

      </td>
  );
  }

selectCategory(categoryId) {
  this.setState({selectedCategoryId: categoryId});
}

decideBackgroundColor(categoryId) {
  const isCategorySelected = (this.state.selectedCategoryId === categoryId);

  if (isCategorySelected) {
    return this.categorySelectedBackgroundColor;
  }
  return this.defaultCategoryBackgroundColor;
}

displayDateForm() {
  const isAnyCategorySelected = this.state.selectedCategoryId !== -1;

  if (isAnyCategorySelected) {
    return (
      <div>

        <Title textToDisplay={texts.titles.fillInformations}/>

        <InputWithLabel type="date" textInLabel={texts.date}/>

        <InputWithLabel type="time" textInLabel={texts.time}/>

      </div>
    );
  }
  return ('');
}

}


export default CategoriesList;
