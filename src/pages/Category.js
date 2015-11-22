import React from "react";

const pathImg = "../public/img/";
const config = require('../config.js');

class Category extends React.Component {

  constructor() {
    super();
    this. _handleClick = this. _handleClick.bind(this);
  }
  render() {
    const colors = this.chooseColor();
    const { hash, selected, url, width, padding } = this.props;
    const title = this.props.title;

    const styles = {
      imageGridItem: {
        display: "inline-block",
        width: `${width}%`,
        boxSizing: "border-box",
        backgroundColor: `${colors.backgroundColor}`,
        border: "solid 1px #eee",
        padding
      },
      imageWrapper: {
        position: "relative",
        width: "100%",
        paddingBottom: "100%",
        backgroundColor: `${colors.backgroundColorWrapper}`,
        WebkitMask: `url(${pathImg+url}) no-repeat 50% 50% ` ,
        mask: `url(${pathImg+url}) no-repeat 50% 50% ` ,

        backgroundSize: "contain",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat"
      },
      title: {
        color: `${colors.colorTitle}`,
        textTransform : "uppercase",
        textAlign: "center",
        width: "100%",
        fontWeight: 'bold'
      } 
    };

    return (
      <div className="imageGridItem"  onClick={this._handleClick} style={styles.imageGridItem}>
        <div className="imageWrapper" style={styles.imageWrapper}>  
        </div>
        <p className="textItem" style={styles.title} >{title}</p>
      </div>
      );
  }

  _handleClick(e) {
    this.props.onClick(this);
  }

}

Category.prototype.chooseColor = function(){

  if(this.props.selected){
    return config.colors.selected;
  }
  else{
    return config.colors.notSelected;
  }
}


Category.propTypes = {
  url: React.PropTypes.string.isRequired,
  width: React.PropTypes.number.isRequired,
  padding: React.PropTypes.number
};

export default Category;