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
  constructor(props) {
      super(props);
      this.state = {selectedCategoryId: -1};
   }
   selectCategory(categoryId){
     this.setState({selectedCategoryId: categoryId});
   }
   displayCategoryRowByOrders(){
     let numberOfCellsInThisRow = 3;
     let displayedCategoryRowByOrders = [];

     for(let categoryOrder=1; categoryOrder <= numberOfCellsInThisRow; categoryOrder++){
       displayedCategoryRowByOrders.push(this.displayCategoryCellFromOrder(categoryOrder));
     }
     return(displayedCategoryRowByOrders);
   }
   displayCategoryCellFromOrder(categoryOrder){
     const categories = this.props.categories.results;
     const numberOfCategories = categories.length;

     for(let categoryId=0; categoryId < numberOfCategories; categoryId++){
       if(categories[categoryId].order === categoryOrder){
         return(this.displayCategoryCellFromId(categoryId));
       }
     }
   }
   displayCategoryCellFromId(categoryId){
     const categories = this.props.categories.results;
     const backColor = this.decideBackgroundColor(categoryId);

     return(
       <div onClick={this.selectCategory.bind(this, categoryId)} style={{backgroundColor: 'pink'}}>
           <td style={{ height: '33.3vw',
             width: '33.3vw',
             borderWidth: '0px 1.5px 1.5px 1.5px',
             borderStyle: 'solid',
             borderColor: 'rgb(222,222,222)',
             margin: 'auto',
             textAlign: 'center',
             backgroundColor: backColor
           }}>
             <div style={{backgroundColor: backColor}}>
             <div style={styles.imageContainer}>
               <img src={imagePath + categories[categoryId].image} style={styles.image}/>
             </div>
             <div style={styles.categoryName}>
               {texts[categories[categoryId].nameKey]}
             </div>
             </div>
           </td>
       </div>
     );
   }
   decideBackgroundColor(categoryId){
     let isCategorySelected = (this.state.selectedCategoryId === categoryId);
     if(isCategorySelected){
       return 'orange';
     } else{
       return 'white';
     }
   }
  render() {
    let it = this;
    return (
      <table style={styles.categoryTable}>
        <tbody style={{fontWeight: 'bold'}}>
          <tr style={{fontWeight: 'bold'}}>
          {it.displayCategoryRowByOrders()}
          </tr>
        </tbody>
      </table>
    );
  }
}


export default CategoriesList;
