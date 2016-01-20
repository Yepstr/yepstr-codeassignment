import React from 'react';
import StyleSheet from 'react-style';

const GridItem = require('./GridItem.js');
const config = require('../config.js');

/** Parse JSON file **/
const categories = require('json!../../data/Category.json');
const images = categories.results;

class Grid extends React.Component {
	render() {
		return (
			<GridItem imagesArray={images} columns={config.grid.columns} padding={config.grid.padding} />
			);
	}
}

export default Grid;