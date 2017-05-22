import React from 'react';
import Category from './Category';


class CategoryList extends React.Component {

    render() {
        return (<ul id="category-choice" >
            {this.props.categories.map((category) => {
                return <Category category={ category } />;
            })}
        </ul>); }
}

export default CategoryList;
