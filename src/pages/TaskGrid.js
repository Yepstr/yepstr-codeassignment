import React from 'react';
import StyleSheet from 'react-style';

import TaskItem from './TaskItem.js';

const styles = StyleSheet.create({

parent:{
    width: 97 + 'vw',
    display:'table',
    margin:'auto',
    paddingTop:4 + 'vh'
}

});

class TaskGrid extends React.Component {

    constructor(){
      super()
      this.state = {
      changed: false,
      selected: ""
    }
  }

  handleClick(childID){
    this.props.clickHandler();
    this.setState({ selected:childID });
  }

  compare(a,b) {
  if (a.order < b.order)
    return -1;
  else if (a.order > b.order)
    return 1;
  else 
    return 0;
}

  render() {
    var objects = this.props.todos;
    objects.sort(this.compare);

    return (
    <div style={styles.parent}>
      {objects.map((object, i) => {
          return <TaskItem clickHandler={this.handleClick.bind(this)} title={object.title} url={object.url} order={object.order} id={object.objectId} selected={object.objectId === this.state.selected} key={i}/>;
      })}
    </div>
    );
  }
}

export default TaskGrid; 
