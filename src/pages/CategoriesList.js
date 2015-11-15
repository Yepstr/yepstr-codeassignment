import React from 'react';
import StyleSheet from 'react-style';
require('json-loader');
const texts = require('json!../../data/i18n/categories-se.json');


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
  render() {
    const categories = this.props.categories.results;
    const test = function() {
      let result = [];
      let numberOfCategories = categories.length;
      let mod = 0;
      for(let categoryId=1; categoryId <= numberOfCategories; categoryId++){
        for(let categoryTestedId=0; categoryTestedId < numberOfCategories; categoryTestedId++){
          if(categories[categoryTestedId].order === categoryId){
            result.push(
              <td style={styles.categoryTd}>
                <div style={styles.imageContainer}>
                  <img src={imagePath + categories[categoryTestedId].image} style={styles.image}/>
                </div>
                <div style={styles.categoryName}>
                  {texts[categories[categoryTestedId].nameKey]}
                </div>
              </td>
            );
            if(categoryId % 3 === 0){
              result.push(<tr></tr>);
            }
          }
        }
      }
      return(
        {result}
      );
    };
    return (
      <table style={styles.categoryTable}>
          {test()}
      </table>
    );
  }
}


export default CategoriesList;
