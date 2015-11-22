import React from "react";
import Category from "./Category";

class GridItem extends React.Component {
  constructor() {
    super();
    this. _handleClick = this. _handleClick.bind(this);
    this.state = { selected : null };
  }
  render() {
    const { imagesArray, padding } = this.props;
    const columns = this.props.columns || 3;
    const width = Math.floor(100 / columns);

    const imageNodes = imagesArray.map((arr, index) => {
      return (
        <Category onClick={this._handleClick} key={index} hash={arr.nameKey} selected={this.state.selected == arr.nameKey} url={arr.url} title={arr.title} width={width} padding={padding}/>
        );
      
    });

    return (
      <div className="imageGrid" style={{textAlign: 'center'}}>
      {imageNodes}
      </div>
      );
  }

  _handleClick(child) {
    console.log(child);
    this.setState( { selected : child.props.hash} );
  }
}

GridItem.propTypes = {
  imagesArray: React.PropTypes.array.isRequired,
  columns: React.PropTypes.number,
  padding: React.PropTypes.number
};

export default GridItem;