import React from 'react';
import StyleSheet from 'react-style';

require('json-loader');
const categories = require('json!../../data/Category.json');

const styles = StyleSheet.create({
  wrapper: {
    padding: '30px',
  },
  titleContainer: {
    backgroundColor: 'rgb(248,248,248)',
    maxHeight: '20%',
    borderColor: 'rgb(222,222,222)',
    borderStyle: 'solid',
    borderWidth: '2px 0px 2px 0px',
  },
  title: {
    textAlign: 'center',
    fontSize: '20px',
    verticalAlign: 'middle',
    padding: '30px',
  },
});

class TasksList extends React.Component {
  render() {
    return (
      <div style={styles.titleContainer}>
        <div style={styles.title}>
          Bonjour
          {categories.results[1].nameKey}
        </div>
      </div>
    );
  }
}


export default TasksList;