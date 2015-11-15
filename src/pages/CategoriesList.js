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
    const clickAction = this.props.onClick;
    const backgroundColors = this.props.backgroundColors;
    let it = this;
    const test = function() {
      let result = [];
      let numberOfCategories = categories.length;
      let mod = 0;
      for(let categoryToDisplayOrder=1; categoryToDisplayOrder <= numberOfCategories; categoryToDisplayOrder++){
        for(let categoryId=0; categoryId < numberOfCategories; categoryId++){
          if(categories[categoryId].order === categoryToDisplayOrder){
            result.push(
              <a onClick={clickAction.bind(it,backgroundColors,categoryToDisplayOrder)} >
                <div style={{backgroundColor: backgroundColors[categoryToDisplayOrder]}}>
                  <td style={styles.categoryTd}>
                    <div style={styles.imageContainer}>
                      <img src={imagePath + categories[categoryId].image} style={styles.image}/>
                    </div>
                    <div style={styles.categoryName}>
                      {texts[categories[categoryId].nameKey]}
                      {backgroundColors[1]}
                    </div>
                  </td>
                </div>
              </a>
            );
            if(categoryToDisplayOrder % 3 === 0){
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
