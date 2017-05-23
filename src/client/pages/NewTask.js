import React from 'react';

import TaskForm from './TaskForm';

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
  name: 'Barnvakt',
  img: './public/img/ic-kids.svg',
  featured: true,
  },
  {
    id: 2,
    name: 'Läxhjälp',
    img: './public/img/ic-study.svg',
    featured: true,
  },
  {
    id: 3,
    name: 'Hundpassning',
    img: './public/img/ic-dog-walking.svg',
    featured: true,
  },
  {
    id: 4,
    name: 'Målning',
    img: './public/img/ic-paint.svg',
    featured: true,
  },
  {
    id: 5,
    name: 'Fönsterputs',
    img: './public/img/ic-window-cleaning.svg',
    featured: true,
  },
  {
    id: 6,
    name: 'Övrigt',
    img: './public/img/ic-other.svg',
    featured: true,
  },
];

class NewTask extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      categories: categories.filter((cat) => { return cat.featured; }),
    };
  }

  render() {
    return (
          <div style={ styles.wrapper }>
            <h1 id="task-title" style={ styles.title }>Create a new Task</h1>
            <div id="task-form" style={ styles.form }>
              <TaskForm categories={ this.state.categories } />
            </div>
          </div>
      ); }
}

export default NewTask;
