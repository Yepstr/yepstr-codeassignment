import React from 'react';
import StyleSheet from 'react-style';


const styles = StyleSheet.create({
  categoryTable: {
    borderCollapse: 'collapse',
    width: '100%',
  },
  categoryTd: {
    borderWidth: '0px 1.5px 1.5px 1.5px',
    borderStyle: 'solid',
    borderColor: 'rgb(222,222,222)',
    margin: '0',
  },
  title: {
    textAlign: 'center',
    fontSize: '20px',
    verticalAlign: 'middle',
    padding: '30px',
  },
});

const imagePath = '../../public/img/';

class CategoriesList extends React.Component {
  render() {
    const categoriesDisplayed = this.props.categories.results.map(function(category) {
      return (
        <td style={styles.categoryTd}>
          <img src={imagePath+category.image}/>
          {category.nameKey}
        </td>
      );
    });
    return (
      <table style={styles.categoryTable}>
        <tr>
          {categoriesDisplayed}
        </tr>
      </table>
    );
  }
}


export default CategoriesList;
