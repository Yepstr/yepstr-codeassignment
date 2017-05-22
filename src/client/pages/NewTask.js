import React from 'react';

import Time from './Time';
import CategoryList from './CategoryList';

const styles = {
  wrapper: {
    padding: '30px',
  },

  title: {
    margin: 'auto',
    textAlign: 'center',
    padding: '10px',
  },

  form: {
    width: '50%',
  },
};

const categories = [{
  id: 1,
  name: 'Babysitting',
  img: './public/img/ic-kids.svg',
},
  {
    id: 2,
    name: 'Homework',
    img: './public/img/ic-study.svg',
  },
  {
    id: 3,
    name: 'Pets',
    img: './public/img/ic-dog-walking.svg',
  },
];

class NewTask extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      categories: categories,
    };
  }

  render() {
    return (
          <div style={ styles.wrapper }>
            <h1 id="task-title" style={ styles.title }>Create a new Task</h1>
            <div id="task-form" style={ styles.form }>
              <CategoryList categories={ this.state.categories } />
              <Time />
            </div>
          </div>
      ); }
}

export default NewTask;
